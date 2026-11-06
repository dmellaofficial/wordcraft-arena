// ==========================================
// WordCraft & Grammar Arena - Main Script Logic
// ==========================================

let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Time Trial specific state
let isTimeTrial = false;
let timeTrialCount = 10;
let timeTrialStartTime = 0;
let timeTrialTimerInterval = null;
let elapsedTimeSeconds = 0;

// Initialize App State on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    console.log("WordCraft & Grammar Arena initialized successfully.");
});

/**
 * Shuffles an array of questions and randomizes answer positions (A, B, C, D)
 */
function getShuffledSessionQuestions(rawPool, count = 10) {
    // Anti-repetition check: load recent session question keys from localStorage
    let recentIds = JSON.parse(localStorage.getItem('wordcraft_recent_q') || '[]');
    
    // Filter out questions used in the last 5 sessions if possible
    let availablePool = rawPool.filter(item => !recentIds.includes(item.q));
    if (availablePool.length < count) {
        availablePool = [...rawPool]; // Reset if pool is exhausted
    }

    const shuffledPool = [...availablePool].sort(() => Math.random() - 0.5);
    const selected = shuffledPool.slice(0, count);

    // Save current selected question texts to recent history
    const selectedIds = selected.map(item => item.q);
    recentIds.push(...selectedIds);
    // Keep history trimmed to last (count * 5) questions to ensure 5-session separation
    if (recentIds.length > count * 5) {
        recentIds = recentIds.slice(-count * 5);
    }
    localStorage.setItem('wordcraft_recent_q', JSON.stringify(recentIds));

    return selected.map(item => {
        const indexedOptions = item.options.map((opt, idx) => ({ text: opt, originalIdx: idx }));
        
        for (let i = indexedOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
        }
        
        const newAnswerIndex = indexedOptions.findIndex(opt => opt.originalIdx === item.answer);

        return {
            q: item.q,
            options: indexedOptions.map(opt => opt.text),
            answer: newAnswerIndex,
            explanation: item.explanation
        };
    });
}

function selectLevel(categoryKey) {
    isTimeTrial = false;
    startQuiz(categoryKey);
}

/**
 * Initiates Time Trial Challenge setup from modal selection
 */
function startTimedChallenge(questionCount) {
    closeTimeTrialModal();
    
    // Combine Intermediate, Advanced, and Expert pools
    let combinedPool = [];
    if (typeof teensQuestions !== 'undefined') combinedPool.push(...teensQuestions);
    if (typeof advancedQuestions !== 'undefined') combinedPool.push(...advancedQuestions);
    if (typeof expertQuestions !== 'undefined') combinedPool.push(...expertQuestions);

    if (combinedPool.length === 0) {
        alert("Question pools for Time Trial are not loaded.");
        return;
    }

    isTimeTrial = true;
    timeTrialCount = questionCount;
    currentCategory = `Time Trial (${questionCount} Qs)`;
    currentQuestions = getShuffledSessionQuestions(combinedPool, questionCount);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // Show 3-second countdown before starting
    runCountdown(() => {
        const dashboard = document.getElementById('screen-levels');
        const quizView = document.getElementById('screen-quiz');
        const resultsView = document.getElementById('screen-results');

        if (dashboard) dashboard.classList.add('hidden');
        if (resultsView) resultsView.classList.add('hidden');
        if (quizView) quizView.classList.remove('hidden');

        // Start Stopwatch
        elapsedTimeSeconds = 0;
        timeTrialStartTime = Date.now();
        const timerWrapper = document.getElementById('tt-timer-wrapper');
        if (timerWrapper) timerWrapper.classList.remove('hidden');

        if (timeTrialTimerInterval) clearInterval(timeTrialTimerInterval);
        timeTrialTimerInterval = setInterval(updateTimeTrialTimer, 100);

        loadQuestion();
    });
}

function runCountdown(onComplete) {
    const countdownModal = document.getElementById('modal-countdown');
    const numberEl = document.getElementById('countdown-number');
    if (!countdownModal || !numberEl) {
        onComplete();
        return;
    }

    countdownModal.classList.remove('hidden');
    countdownModal.classList.add('flex');
    
    let count = 3;
    numberEl.textContent = count;

    const timer = setInterval(() => {
        count--;
        if (count > 0) {
            numberEl.textContent = count;
        } else if (count === 0) {
            numberEl.textContent = "GO!";
        } else {
            clearInterval(timer);
            countdownModal.classList.remove('flex');
            countdownModal.classList.add('hidden');
            onComplete();
        }
    }, 1000);
}

function updateTimeTrialTimer() {
    elapsedTimeSeconds = (Date.now() - timeTrialStartTime) / 1000;
    const timerDisplay = document.getElementById('tt-timer-display');
    if (timerDisplay) {
        timerDisplay.textContent = `${elapsedTimeSeconds.toFixed(1)}s`;
    }
}

/**
 * Starts a quiz session for a regular difficulty tier.
 */
function startQuiz(categoryKey) {
    let rawPool = [];

    if (categoryKey === 'basic' && typeof basicQuestions !== 'undefined') {
        rawPool = basicQuestions;
    } else if (categoryKey === 'teens' && typeof teensQuestions !== 'undefined') {
        rawPool = teensQuestions;
    } else if (categoryKey === 'advanced' && typeof advancedQuestions !== 'undefined') {
        rawPool = advancedQuestions;
    } else if (categoryKey === 'expert' && typeof expertQuestions !== 'undefined') {
        rawPool = expertQuestions;
    } else {
        console.error("Error: Question pool not found for category:", categoryKey);
        alert("Error loading questions. Please check your script file connections.");
        return;
    }

    currentCategory = categoryKey;
    currentQuestions = getShuffledSessionQuestions(rawPool, 10);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    const dashboard = document.getElementById('screen-levels');
    const quizView = document.getElementById('screen-quiz');
    const resultsView = document.getElementById('screen-results');
    const timerWrapper = document.getElementById('tt-timer-wrapper');

    if (timerWrapper) timerWrapper.classList.add('hidden');
    if (dashboard) dashboard.classList.add('hidden');
    if (resultsView) resultsView.classList.add('hidden');
    if (quizView) quizView.classList.remove('hidden');

    loadQuestion();
}

/**
 * Loads the current question and populates multiple-choice options
 */
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        if (isTimeTrial && timeTrialTimerInterval) {
            clearInterval(timeTrialTimerInterval);
        }
        showResults();
        return;
    }

    const qData = currentQuestions[currentQuestionIndex];
    
    const categoryTitle = document.getElementById('quiz-level-badge');
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.getElementById('progress-bar');

    if (categoryTitle) categoryTitle.innerText = isTimeTrial ? currentCategory.toUpperCase() : `${currentCategory.toUpperCase()} Tier (10 Qs)`;
    if (questionCounter) questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    if (progressBar) {
        const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    const questionText = document.getElementById('question-text');
    if (questionText) questionText.innerText = qData.q;

    const optionsContainer = document.getElementById('options-container');
    if (!optionsContainer) return;
    
    optionsContainer.innerHTML = '';
    const optionLabels = ['A', 'B', 'C', 'D'];

    qData.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = "w-full p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left font-medium text-slate-800 transition flex items-center justify-between shadow-sm cursor-pointer";
        
        button.innerHTML = `
            <span>${optionText}</span>
            <span class="w-6 h-6 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-xs text-slate-500 font-semibold">${optionLabels[index]}</span>
        `;

        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    const explanationBox = document.getElementById('explanation-box');
    if (explanationBox) explanationBox.classList.add('hidden');
    
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.classList.add('hidden');
}

/**
 * Handles user answer selection and evaluates correctness
 */
function selectAnswer(selectedIndex, selectedBtn) {
    const qData = currentQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options-container');
    const options = optionsContainer ? optionsContainer.children : [];

    for (let btn of options) {
        btn.disabled = true;
        btn.classList.add('opacity-75', 'cursor-not-allowed');
    }

    const explanationBox = document.getElementById('explanation-box');
    if (explanationBox) explanationBox.classList.remove('hidden');

    const isCorrect = selectedIndex === qData.answer;

    if (isCorrect) {
        selectedBtn.classList.remove('bg-slate-50', 'border-slate-200');
        selectedBtn.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-800');
        if (explanationBox) {
            explanationBox.className = "p-4 rounded-xl text-sm border bg-emerald-50 border-emerald-200 text-emerald-800 slide-in";
            explanationBox.innerHTML = `<strong>Correct!</strong> ${qData.explanation}`;
        }
        score += 20;
    } else {
        selectedBtn.classList.remove('bg-slate-50', 'border-slate-200');
        selectedBtn.classList.add('bg-rose-50', 'border-rose-300', 'text-rose-800');
        
        if (options[qData.answer]) {
            options[qData.answer].classList.remove('bg-slate-50', 'border-slate-200');
            options[qData.answer].classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-800');
        }

        if (explanationBox) {
            explanationBox.className = "p-4 rounded-xl text-sm border bg-rose-50 border-rose-200 text-rose-800 slide-in";
            explanationBox.innerHTML = `<strong>Incorrect.</strong> The correct answer is: ${qData.explanation}`;
        }
    }

    userAnswers.push({
        question: qData.q,
        selected: selectedIndex,
        correct: qData.answer,
        isCorrect: isCorrect,
        explanation: qData.explanation
    });

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

/**
 * Displays final results, updates header stats, and securely syncs to Firestore
 */
async function showResults() {
    const quizView = document.getElementById('screen-quiz');
    const resultsView = document.getElementById('screen-results');
    
    if (quizView) quizView.classList.add('hidden');
    if (resultsView) resultsView.classList.remove('hidden');

    const finalScore = document.getElementById('final-score');
    const finalCorrect = document.getElementById('final-correct');
    const stat1Label = document.getElementById('res-stat-1-label');
    const stat2Label = document.getElementById('res-stat-2-label');

    if (isTimeTrial) {
        if (stat1Label) stat1Label.textContent = "Completion Time";
        if (stat2Label) stat2Label.textContent = "Questions Solved";
        if (finalScore) finalScore.textContent = `${elapsedTimeSeconds.toFixed(1)}s`;
        if (finalCorrect) finalCorrect.textContent = `${currentQuestions.length}/${currentQuestions.length}`;

        // Save Time Trial record to separate 'timetrials' collection
        if (typeof auth !== 'undefined' && auth.currentUser && typeof db !== 'undefined') {
            try {
                const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
                const username = userDoc.exists && userDoc.data().username ? userDoc.data().username : auth.currentUser.email.split('@')[0];

                await db.collection('timetrials').add({
                    userId: auth.currentUser.uid,
                    username: username,
                    timeSeconds: parseFloat(elapsedTimeSeconds.toFixed(1)),
                    challengeType: `${timeTrialCount} Questions`,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                console.log("Time trial score recorded successfully!");
                loadTimeTrialLeaderboard();
            } catch (e) {
                console.error("Error saving time trial record:", e);
            }
        }
    } else {
        if (stat1Label) stat1Label.textContent = "Final Score";
        if (stat2Label) stat2Label.textContent = "Correct Answers";
        if (finalScore) finalScore.textContent = score;
        if (finalCorrect) finalCorrect.textContent = `${score / 20}/${currentQuestions.length}`;

        const headerScoreEl = document.getElementById('header-score');
        const headerStreakEl = document.getElementById('header-streak');

        let currentTotalScore = parseInt(headerScoreEl ? headerScoreEl.textContent : 0) || 0;
        let currentStreak = parseInt(headerStreakEl ? headerStreakEl.textContent : 0) || 0;

        currentTotalScore += score;
        currentStreak += 1;

        if (headerScoreEl) headerScoreEl.textContent = currentTotalScore;
        if (headerStreakEl) headerStreakEl.textContent = currentStreak;

        if (typeof auth !== 'undefined' && auth.currentUser && typeof db !== 'undefined') {
            try {
                const userRef = db.collection('users').doc(auth.currentUser.uid);
                await userRef.set({
                    email: auth.currentUser.email,
                    score: currentTotalScore,
                    streak: currentStreak,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                console.log("Cumulative score successfully saved to cloud!");
            } catch (e) {
                console.error("Error saving score to cloud:", e);
            }
        }
    }
}

function restartQuiz() {
    if (isTimeTrial) {
        startTimedChallenge(timeTrialCount);
    } else {
        startQuiz(currentCategory);
    }
    const resultsView = document.getElementById('screen-results');
    if (resultsView) resultsView.classList.add('hidden');
}

function goHome() {
    const resultsView = document.getElementById('screen-results');
    const quizView = document.getElementById('screen-quiz');
    const levelsView = document.getElementById('screen-levels');

    if (resultsView) resultsView.classList.add('hidden');
    if (quizView) quizView.classList.add('hidden');
    if (levelsView) levelsView.classList.remove('hidden');
    
    loadTimeTrialLeaderboard();
}
