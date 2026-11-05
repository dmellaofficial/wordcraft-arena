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
    setupEventListeners();
});

function setupEventListeners() {
    // Navigation / UI Handlers can be attached here
}

/**
 * Starts a quiz session for a selected difficulty tier.
 * Calls the runtime shuffler from questions.js to guarantee unique options.
 */
function startQuiz(categoryKey) {
    if (typeof getShuffledSessionQuestions !== 'function') {
        console.error("Error: getShuffledSessionQuestions is not defined. Ensure questions.js is loaded first.");
        alert("Error loading questions. Please refresh the page.");
        return;
    }

    currentCategory = categoryKey;
    // Pulls 10 randomized, fully shuffled questions per session
    currentQuestions = getShuffledSessionQuestions(categoryKey, 10);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // Switch UI Views
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('quiz-view').classList.remove('hidden');

    loadQuestion();
}

/**
 * Loads the current question and populates the multiple-choice options (A, B, C, D)
 */
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const qData = currentQuestions[currentQuestionIndex];
    
    // Update progress bar & headers
    document.getElementById('current-category-title').innerText = `${currentCategory.toUpperCase()} Tier (10 Qs)`;
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;

    // Render Question Text
    document.getElementById('question-text').innerText = qData.q;

    // Render Options A, B, C, D
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const optionLabels = ['A', 'B', 'C', 'D'];

    qData.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = "w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-all flex items-center space-x-4 group bg-white shadow-sm";
        
        button.innerHTML = `
            <span class="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center font-semibold text-slate-600 transition-colors">${optionLabels[index]}</span>
            <span class="flex-1 text-slate-700 font-medium">${optionText}</span>
        `;

        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
}

/**
 * Handles user answer selection and evaluates correctness
 */
function selectAnswer(selectedIndex) {
    const qData = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === qData.answer;

    if (isCorrect) {
        score++;
    }

    userAnswers.push({
        question: qData.q,
        selected: selectedIndex,
        correct: qData.answer,
        isCorrect: isCorrect,
        explanation: qData.explanation
    });

    // Move to next question immediately or display feedback
    currentQuestionIndex++;
    loadQuestion();
}

/**
 * Displays the final results view upon quiz completion
 */
function showResults() {
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('results-view').classList.remove('hidden');

    document.getElementById('final-score-text').innerText = `You scored ${score} out of ${currentQuestions.length}!`;
    
    // Save score or update user streak if applicable
}

/**
 * Returns user back to dashboard selection
 */
function returnToDashboard() {
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('results-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.remove('hidden');
}
