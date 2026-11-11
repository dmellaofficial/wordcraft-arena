// ==========================================
// WordCraft & Grammar Arena - Main Script Logic
// ==========================================

let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Time Trial / Skill Practice Challenge specific state
let isTimeTrial = false;
let isSkillPracticeChallenge = false;
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
    isSkillPracticeChallenge = false;
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
    isSkillPracticeChallenge = false;
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
        const timerLabel = document.getElementById('tt-timer-label');
        if (timerLabel) timerLabel.textContent = "Time Trial Challenge (+1s penalty per wrong answer)";
        if (timerWrapper) timerWrapper.classList.remove('hidden');

        if (timeTrialTimerInterval) clearInterval(timeTrialTimerInterval);
        timeTrialTimerInterval = setInterval(updateTimeTrialTimer, 100);

        loadQuestion();
    });
}

function startSkillPracticeChallenge() {
    let combinedPool = [];
    if (typeof idiomsQuestions !== 'undefined') combinedPool.push(...idiomsQuestions);
    if (typeof idioms2Questions !== 'undefined') combinedPool.push(...idioms2Questions);
    if (typeof wordAnalogyQuestions !== 'undefined') combinedPool.push(...wordAnalogyQuestions);
    if (typeof wordAnalogy2Questions !== 'undefined') combinedPool.push(...wordAnalogy2Questions);
    if (typeof readingCompQuestions !== 'undefined') combinedPool.push(...readingCompQuestions);
    if (typeof readingComp2Questions !== 'undefined') combinedPool.push(...readingComp2Questions);
    if (typeof identifyingErrorsQuestions !== 'undefined') combinedPool.push(...identifyingErrorsQuestions);
    if (typeof vocabularyQuestions !== 'undefined') combinedPool.push(...vocabularyQuestions);
    if (typeof vocabulary2Questions !== 'undefined') combinedPool.push(...vocabulary2Questions);

    if (combinedPool.length === 0) {
        alert("Skill practice question pools are not loaded.");
        return;
    }

    isTimeTrial = false;
    isSkillPracticeChallenge = true;
    timeTrialCount = 150;
    currentCategory = "Skill Practice Challenge";
    currentQuestions = getShuffledSessionQuestions(combinedPool, 150);
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
        const timerLabel = document.getElementById('tt-timer-label');
        if (timerLabel) timerLabel.textContent = "Skill Practice Challenge (3:00 Limit)";
        if (timerWrapper) timerWrapper.classList.remove('hidden');

        if (timeTrialTimerInterval) clearInterval(timeTrialTimerInterval);
        timeTrialTimerInterval = setInterval(updateSkillPracticeChallengeTimer, 100);

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

function updateSkillPracticeChallengeTimer() {
    const rawElapsed = (Date.now() - timeTrialStartTime) / 1000;
    const remaining = 180 - rawElapsed; // 3 minutes = 180 seconds

    const timerDisplay = document.getElementById('tt-timer-display');
    const timerBar = document.getElementById('tt-timer-bar');

    if (timerDisplay) {
        timerDisplay.textContent = formatMMSS(Math.max(0, remaining));
    }
    if (timerBar) {
        const percent = Math.max(0, Math.min(100, (remaining / 180) * 100));
        timerBar.style.width = `${percent}%`;
    }

    if (remaining <= 0) {
        clearInterval(timeTrialTimerInterval);
        elapsedTimeSeconds = 180;
        showResults();
    }
}

function startQuiz(categoryKey) {
    let rawPool = [];
    let sessionCount = 10; // Default session length for Core Tiers

    if (categoryKey === 'basic' && typeof basicQuestions !== 'undefined') {
        rawPool = basicQuestions;
    } else if (categoryKey === 'teens' && typeof teensQuestions !== 'undefined') {
        rawPool = teensQuestions;
    } else if (categoryKey === 'advanced' && typeof advancedQuestions !== 'undefined') {
        rawPool = advancedQuestions;
    } else if (categoryKey === 'expert' && typeof expertQuestions !== 'undefined') {
        rawPool = expertQuestions;
    } else if (categoryKey === 'idioms' && typeof idiomsQuestions !== 'undefined') {
        rawPool = idiomsQuestions;
        sessionCount = 15;
    } else if (categoryKey === 'idioms2' && typeof idioms2Questions !== 'undefined') {
        rawPool = idioms2Questions;
        sessionCount = 15;
    } else if (categoryKey === 'analogy' && typeof wordAnalogyQuestions !== 'undefined') {
        rawPool = wordAnalogyQuestions;
        sessionCount = 15;
    } else if (categoryKey === 'analogy2' && typeof wordAnalogy2Questions !== 'undefined') {
        rawPool = wordAnalogy2Questions;
        sessionCount = 15;
    } else if (categoryKey === 'reading' && typeof readingCompQuestions !== 'undefined') {
        rawPool = readingCompQuestions;
        sessionCount = 15;
    } else if (categoryKey === 'reading2' && typeof readingComp2Questions !== 'undefined') {
        rawPool = readingComp2Questions;
        sessionCount = 15;
    } else if (categoryKey === 'errors' && typeof identifyingErrorsQuestions !== 'undefined') {
        rawPool = identifyingErrorsQuestions;
        sessionCount = 15;
    } else if (categoryKey === 'vocab' && typeof vocabularyQuestions !== 'undefined') {
        rawPool = vocabularyQuestions;
        sessionCount = 15;
    } else if (categoryKey === 'vocab2' && typeof vocabulary2Questions !== 'undefined') {
        rawPool = vocabulary2Questions;
        sessionCount = 15;
    } else if (categoryKey === 'fos' && typeof figuresOfSpeechQuestions !== 'undefined') {
        rawPool = figuresOfSpeechQuestions;
        sessionCount = 15;
    } else {
        console.error("Error: Question pool not found for category:", categoryKey);
        alert("Error loading questions. Please check your script file connections.");
        return;
    }

    currentCategory = categoryKey;
    currentQuestions = getShuffledSessionQuestions(rawPool, sessionCount);
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
        if ((isTimeTrial || isSkillPracticeChallenge) && timeTrialTimerInterval) {
            clearInterval(timeTrialTimerInterval);
        }
        showResults();
        return;
    }

    const qData = currentQuestions[currentQuestionIndex];
    
    const categoryTitle = document.getElementById('quiz-level-badge');
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.getElementById('progress-bar');

    if (categoryTitle) categoryTitle.innerText = isTimeTrial || isSkillPracticeChallenge ? currentCategory.toUpperCase() : `${currentCategory.toUpperCase()} Tier (${currentQuestions.length} Qs)`;
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
        score += 5;
    } else {
        selectedBtn.classList.remove('bg-slate-50', 'border-slate-200');
        selectedBtn.classList.add('bg-rose-50', 'border-rose-300', 'text-rose-800');
        
        if (options[qData.answer]) {
            options[qData.answer].classList.remove('bg-slate-50', 'border-slate-200');
            options[qData.answer].classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-800');
        }

        if (isTimeTrial) {
            timeTrialPenaltySeconds += 1;
            if (explanationBox) {
                explanationBox.className = "p-4 rounded-xl text-sm border bg-rose-50 border-rose-200 text-rose-800 slide-in";
                explanationBox.innerHTML = `<strong>Incorrect (+1s penalty).</strong> The correct answer is: ${qData.explanation}`;
            }
        } else {
            if (explanationBox) {
                explanationBox.className = "p-4 rounded-xl text-sm border bg-rose-50 border-rose-200 text-rose-800 slide-in";
                explanationBox.innerHTML = `<strong>Incorrect.</strong> The correct answer is: ${qData.explanation}`;
            }
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
    if (nextBtn) {
        nextBtn.classList.remove('hidden');
        nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function showResults() {
    const quizView = document.getElementById('screen-quiz');
    const resultsView = document.getElementById('screen-results');

    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const mistakeCount = currentQuestions.length - correctCount;

    if (isSkillPracticeChallenge) {
        if (quizView) quizView.classList.add('hidden');
        if (resultsView) resultsView.classList.remove('hidden');

        const rawElapsed = (Date.now() - timeTrialStartTime) / 1000;
        const finalTimeSeconds = Math.min(180, rawElapsed);

        const finalScore = document.getElementById('final-score');
        const finalCorrect = document.getElementById('final-correct');
        const stat1Label = document.getElementById('res-stat-1-label');
        const stat2Label = document.getElementById('res-stat-2-label');
        const resultMessage = document.getElementById('result-message');

        if (stat1Label) stat1Label.textContent = "Correct Count (Score)";
        if (stat2Label) stat2Label.textContent = "Accomplished Time";
        if (finalScore) finalScore.textContent = `${correctCount} Correct`;
        if (finalCorrect) finalCorrect.textContent = formatMMSS(finalTimeSeconds);
        if (resultMessage) resultMessage.textContent = "Skill Practice Challenge record saved successfully!";

        if (typeof auth !== 'undefined' && auth.currentUser && typeof db !== 'undefined') {
            try {
                const userId = auth.currentUser.uid;
                const userDoc = await db.collection('users').doc(userId).get();
                const username = userDoc.exists && userDoc.data().username ? userDoc.data().username : auth.currentUser.email.split('@')[0];

                const existingQuery = await db.collection('skillpractice')
                    .where('userId', '==', userId)
                    .get();

                let shouldSave = true;
                let existingDocId = null;

                if (!existingQuery.empty) {
                    const existingData = existingQuery.docs[0].data();
                    existingDocId = existingQuery.docs[0].id;
                    // Save if higher score, or same score with faster time
                    if (existingData.score > correctCount || (existingData.score === correctCount && existingData.timeSeconds <= finalTimeSeconds)) {
                        shouldSave = false;
                    }
                }

                if (shouldSave) {
                    const payload = {
                        userId: userId,
                        username: username,
                        score: correctCount,
                        timeSeconds: Math.round(finalTimeSeconds),
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    if (existingDocId) {
                        await db.collection('skillpractice').doc(existingDocId).set(payload);
                    } else {
                        await db.collection('skillpractice').add(payload);
                    }
                }
                loadSkillPracticeLeaderboards();
            } catch (e) {
                console.error("Error saving skill practice challenge record:", e);
            }
        }
    } else if (isTimeTrial) {
        if (quizView) quizView.classList.add('hidden');
        if (resultsView) resultsView.classList.remove('hidden');

        const finalScore = document.getElementById('final-score');
        const finalCorrect = document.getElementById('final-correct');
        const stat1Label = document.getElementById('res-stat-1-label');
        const stat2Label = document.getElementById('res-stat-2-label');
        const resultMessage = document.getElementById('result-message');

        if (stat1Label) stat1Label.textContent = "Final Time (HH:MM:SS)";
        if (stat2Label) stat2Label.innerHTML = `No. of Correct: <span class="text-emerald-600 font-bold">${correctCount}</span><br>No. of Mistakes: <span class="text-rose-600 font-bold">${mistakeCount}</span>`;
        if (finalScore) finalScore.textContent = formatHHMMSS(elapsedTimeSeconds);
        if (finalCorrect) finalCorrect.textContent = ""; 
        if (resultMessage) resultMessage.textContent = "Time trial record saved successfully!";

        if (typeof auth !== 'undefined' && auth.currentUser && typeof db !== 'undefined') {
            try {
                const userId = auth.currentUser.uid;
                const userDoc = await db.collection('users').doc(userId).get();
                const username = userDoc.exists && userDoc.data().username ? userDoc.data().username : auth.currentUser.email.split('@')[0];

                const finalTimeRounded = Math.round(elapsedTimeSeconds);
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
                }
                loadTimeTrialLeaderboards();
            } catch (e) {
                console.error("Error saving time trial record:", e);
            }
        }
    } else {
        const coreTiers = ['basic', 'teens', 'advanced', 'expert'];
        const isCoreTier = coreTiers.includes(currentCategory);

        if (mistakeCount === 0 && isCoreTier) {
            score += 20;
        }

        if (isCoreTier) {
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
                } catch (e) {
                    console.error("Error saving score to cloud:", e);
                }
            }

            if (quizView) quizView.classList.add('hidden');
            if (resultsView) resultsView.classList.remove('hidden');

            const finalScore = document.getElementById('final-score');
            const finalCorrect = document.getElementById('final-correct');
            const stat1Label = document.getElementById('res-stat-1-label');
            const stat2Label = document.getElementById('res-stat-2-label');
            const resultMessage = document.getElementById('result-message');

            if (stat1Label) stat1Label.textContent = "Score";
            if (stat2Label) stat2Label.textContent = "Correct Answers";
            if (finalScore) finalScore.textContent = `${score} Score${mistakeCount === 0 ? ' (Flawless +20!)' : ''}`;
            if (finalCorrect) finalCorrect.textContent = `${correctCount} out of ${currentQuestions.length}`;
            if (resultMessage) resultMessage.textContent = mistakeCount === 0 ? "🎯 Flawless run! +20 Bonus awarded!" : "Score saved securely to the cloud.";
            return;
        }

        if (quizView) quizView.classList.add('hidden');
        if (resultsView) resultsView.classList.remove('hidden');

        const finalScore = document.getElementById('final-score');
        const finalCorrect = document.getElementById('final-correct');
        const stat1Label = document.getElementById('res-stat-1-label');
        const stat2Label = document.getElementById('res-stat-2-label');
        const resultMessage = document.getElementById('result-message');

        const percentage = Math.round((correctCount / currentQuestions.length) * 100);

        if (stat1Label) stat1Label.textContent = "Percentage Score";
        if (stat2Label) stat2Label.textContent = "Correct Answers";
        if (finalScore) finalScore.textContent = `${percentage}%`;
        if (finalCorrect) finalCorrect.textContent = `${correctCount} out of ${currentQuestions.length}`;
        if (resultMessage) resultMessage.textContent = ""; 
    }
}

function restartQuiz() {
    if (isTimeTrial) {
        startTimedChallenge(timeTrialCount);
    } else if (isSkillPracticeChallenge) {
        startSkillPracticeChallenge();
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
    loadSkillPracticeLeaderboards();
}

function formatHHMMSS(totalSeconds) {
    const totalSecInt = Math.floor(totalSeconds);
    const hrs = Math.floor(totalSecInt / 3600);
    const mins = Math.floor((totalSecInt % 3600) / 60);
    const secs = totalSecInt % 60;

    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function formatMMSS(totalSeconds) {
    const totalSecInt = Math.max(0, Math.floor(totalSeconds));
    const mins = Math.floor(totalSecInt / 60);
    const secs = totalSecInt % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(mins)}:${pad(secs)}`;
}
