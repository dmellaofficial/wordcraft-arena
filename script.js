// ==========================================
// WordCraft & Grammar Arena - Main Script Logic
// ==========================================

let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Initialize App State on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    console.log("WordCraft & Grammar Arena initialized successfully.");
});

/**
 * Shuffles an array of questions and randomizes the answer positions (A, B, C, D)
 */
function getShuffledSessionQuestions(rawPool, count = 10) {
    const shuffledPool = [...rawPool].sort(() => Math.random() - 0.5);
    const selected = shuffledPool.slice(0, count);

    return selected.map(item => {
        const indexedOptions = item.options.map((opt, idx) => ({ text: opt, originalIdx: idx }));
        
        // Fisher-Yates shuffle on the options
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

/**
 * Starts a quiz session for a selected difficulty tier using the separated question pools.
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
    // Pulls 10 randomized, fully shuffled questions with scrambled options per session
    currentQuestions = getShuffledSessionQuestions(rawPool, 10);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // Switch UI Views
    const dashboard = document.getElementById('screen-levels');
    const quizView = document.getElementById('screen-quiz');
    const resultsView = document.getElementById('screen-results');

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
        showResults();
        return;
    }

    const qData = currentQuestions[currentQuestionIndex];
    
    const categoryTitle = document.getElementById('quiz-level-badge');
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.getElementById('progress-bar');

    if (categoryTitle) categoryTitle.innerText = `${currentCategory.toUpperCase()} Tier (10 Qs)`;
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
 * Displays final results
 */
function showResults() {
    const quizView = document.getElementById('screen-quiz');
    const resultsView = document.getElementById('screen-results');
    
    if (quizView) quizView.classList.add('hidden');
    if (resultsView) resultsView.classList.remove('hidden');

    const finalScore = document.getElementById('final-score');
    const finalCorrect = document.getElementById('final-correct');

    if (finalScore) finalScore.textContent = score;
    if (finalCorrect) finalCorrect.textContent = `${score / 20}/${currentQuestions.length}`;
}

function restartQuiz() {
    startQuiz(currentCategory);
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
}
