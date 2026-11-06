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
let timeTrialPenaltySeconds = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log("WordCraft & Grammar Arena initialized successfully.");
});

function getShuffledSessionQuestions(rawPool, count = 10) {
    let recentIds = JSON.parse(localStorage.getItem('wordcraft_recent_q') || '[]');
    
    let availablePool = rawPool.filter(item => !recentIds.includes(item.q));
    if (availablePool.length < count) {
        availablePool = [...rawPool];
    }

    const shuffledPool = [...availablePool].sort(() => Math.random() - 0.5);
    const selected = shuffledPool.slice(0, count);

    const selectedIds = selected.map(item => item.q);
    recentIds.push(...selectedIds);
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

function startTimedChallenge(questionCount) {
    closeTimeTrialModal();
    
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
    timeTrialPenaltySeconds = 0;
    currentCategory = `Time Trial (${questionCount} Qs)`;
    currentQuestions = getShuffledSessionQuestions(combinedPool, questionCount);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    runCountdown(() => {
        const dashboard = document.getElementById('screen-levels');
        const quizView = document.getElementById('screen-quiz');
        const resultsView = document.getElementById('screen-results');

        if (dashboard) dashboard.classList.add('hidden');
        if (resultsView) resultsView.classList.add('hidden');
        if (quizView) quizView.classList.remove('hidden');

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
    const rawElapsed = (Date.now() - timeTrialStartTime) / 1000;
    elapsedTimeSeconds = rawElapsed + timeTrialPenaltySeconds;

    const timerDisplay = document.getElementById('tt-timer-display');
    if (timerDisplay) {
        timerDisplay.textContent = formatHHMMSS(elapsedTimeSeconds);
    }
}

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
            explanationBox.innerHTML = `<strong>Incorrect (+1s penalty).</strong> The correct answer is: ${qData.explanation}`;
        }

        if (isTimeTrial) {
            timeTrialPenaltySeconds += 1;
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
        if (stat1Label) stat1Label.textContent = "Final Time (HH:MM:SS)";
        if (stat2Label) stat2Label.textContent = "Questions Solved";
        if (finalScore) finalScore.textContent = formatHHMMSS(elapsedTimeSeconds);
        if (finalCorrect) finalCorrect.textContent = `${currentQuestions.length}/${currentQuestions.length}`;

        if (typeof auth !== 'undefined' && auth.currentUser && typeof db !== 'undefined') {
            try {
                const userId = auth.currentUser.uid;
                const userDoc = await db.collection('users').doc(userId).get();
                const username = userDoc.exists && userDoc.data().username ? userDoc.data().username : auth.currentUser.email.split('@')[0];

                const finalTimeRounded = parseFloat(elapsedTimeSeconds.toFixed(1));
                const challengeTypeLabel = `${timeTrialCount} Questions`;

                const existingQuery = await db.collection('timetrials')
                    .where('userId', '==', userId)
                    .where('challengeType', '==', challengeTypeLabel)
                    .get();

                let shouldSave = true;
                let existingDocId = null;

                if (!existingQuery.empty) {
                    const existingData = existingQuery.docs[0].data();
                    existingDocId = existingQuery.docs[0].id;
                    if (finalTimeRounded >= existingData.timeSeconds) {
                        shouldSave = false;
                        console.log("New time did not surpass personal best. Existing record kept.");
                    }
                }

                if (shouldSave) {
                    if (existingDocId) {
                        await db.collection('timetrials').doc(existingDocId).set({
                            userId: userId,
                            username: username,
                            timeSeconds: finalTimeRounded,
                            challengeType: challengeTypeLabel,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        });
                    } else {
                        await db.collection('timetrials').add({
                            userId: userId,
                            username: username,
                            timeSeconds: finalTimeRounded,
                            challengeType: challengeTypeLabel,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        });
                    }
                    console.log("Time trial personal best updated successfully!");
                }

                loadTimeTrialLeaderboards();
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
    
    loadTimeTrialLeaderboards();
}

function formatHHMMSS(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (num) => String(Math.floor(num)).padStart(2, '0');
    const padSecs = (num) => {
        const s = num.toFixed(1);
        return s < 10 ? '0' + s : s;
    };

    if (hrs > 0) {
        return `${pad(hrs)}:${pad(mins)}:${padSecs(secs)}`;
    } else {
        return `00:${pad(mins)}:${padSecs(secs)}`;
    }
}
