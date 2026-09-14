/**
 * CompArch Quiz — Application Logic
 * Features: Multiple-choice & Identification modes, randomized questions,
 *           timer, score tracking, streak counting, chapter breakdown,
 *           review answers.
 */

(function () {
    "use strict";

    // ── Utility: Fisher–Yates Shuffle ───────────────────────────────────
    function shuffle(array) {
        const a = [...array];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // ── Utility: normalize string for comparison ────────────────────────
    function normalize(str) {
        return str.trim().toLowerCase().replace(/[\s\-\/]+/g, " ");
    }

    // ── Background Particles ────────────────────────────────────────────
    function createParticles() {
        const container = document.getElementById("bgParticles");
        const colors = [
            "rgba(99,102,241,0.25)",
            "rgba(6,182,212,0.2)",
            "rgba(139,92,246,0.2)",
            "rgba(16,185,129,0.15)"
        ];
        for (let i = 0; i < 35; i++) {
            const p = document.createElement("div");
            p.classList.add("particle");
            const size = Math.random() * 4 + 2;
            p.style.width = size + "px";
            p.style.height = size + "px";
            p.style.left = Math.random() * 100 + "%";
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = Math.random() * 20 + 15 + "s";
            p.style.animationDelay = Math.random() * 20 + "s";
            container.appendChild(p);
        }
    }
    createParticles();

    // ── DOM References ──────────────────────────────────────────────────
    const screens = {
        start: document.getElementById("startScreen"),
        quiz: document.getElementById("quizScreen"),
        results: document.getElementById("resultsScreen")
    };

    const els = {
        btnStart: document.getElementById("btnStart"),
        btnNext: document.getElementById("btnNext"),
        btnRestart: document.getElementById("btnRestart"),
        btnToggleReview: document.getElementById("btnToggleReview"),
        questionCount: document.getElementById("questionCount"),
        qCounter: document.getElementById("qCounter"),
        chapterBadge: document.getElementById("chapterBadge"),
        modeBadge: document.getElementById("modeBadge"),
        liveScore: document.getElementById("liveScore"),
        progressFill: document.getElementById("progressFill"),
        timerFill: document.getElementById("timerFill"),
        questionCard: document.getElementById("questionCard"),
        questionNumber: document.getElementById("questionNumber"),
        questionText: document.getElementById("questionText"),
        choicesGrid: document.getElementById("choicesGrid"),
        // Identification
        identificationArea: document.getElementById("identificationArea"),
        idAnswerInput: document.getElementById("idAnswerInput"),
        btnSubmitAnswer: document.getElementById("btnSubmitAnswer"),
        // Feedback
        feedbackBar: document.getElementById("feedbackBar"),
        feedbackIcon: document.getElementById("feedbackIcon"),
        feedbackText: document.getElementById("feedbackText"),
        // Results
        scoreRingCircle: document.getElementById("scoreRingCircle"),
        ringPercent: document.getElementById("ringPercent"),
        resultsTitle: document.getElementById("resultsTitle"),
        resultsSubtitle: document.getElementById("resultsSubtitle"),
        statCorrect: document.getElementById("statCorrect"),
        statWrong: document.getElementById("statWrong"),
        statTime: document.getElementById("statTime"),
        statStreak: document.getElementById("statStreak"),
        breakdownBars: document.getElementById("breakdownBars"),
        reviewList: document.getElementById("reviewList")
    };

    // ── Mode Toggle ────────────────────────────────────────────────────
    let quizMode = "mc"; // "mc" or "id"
    const modeBtns = document.querySelectorAll(".mode-btn");

    modeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            quizMode = btn.dataset.mode;
        });
    });

    // ── State ───────────────────────────────────────────────────────────
    let questions = [];
    let currentIndex = 0;
    let score = 0;
    let streak = 0;
    let bestStreak = 0;
    let answered = false;
    let timerInterval = null;
    let timerValue = 100;
    const TIMER_SECONDS_MC = 30;
    const TIMER_SECONDS_ID = 45; // more time for typing
    let questionStartTime = 0;
    let totalTime = 0;
    let history = []; // { question, userAnswer, correctAnswer, correct, chapter }

    function getTimerSeconds() {
        return quizMode === "id" ? TIMER_SECONDS_ID : TIMER_SECONDS_MC;
    }

    // ── Screen Management ───────────────────────────────────────────────
    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove("active"));
        screens[name].classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // ── Prepare Questions (randomize order & choices) ───────────────────
    function prepareQuestions() {
        const count = parseInt(els.questionCount.value, 10);

        if (quizMode === "mc") {
            let pool = shuffle(QUESTION_BANK);
            if (count > 0) pool = pool.slice(0, count);

            // Randomize each question's choices while tracking correct answer
            questions = pool.map(q => {
                const correctText = q.choices[q.answer];
                const shuffledChoices = shuffle(q.choices);
                const newAnswer = shuffledChoices.indexOf(correctText);
                return {
                    chapter: q.chapter,
                    question: q.question,
                    choices: shuffledChoices,
                    answer: newAnswer
                };
            });
        } else {
            // Identification mode
            let pool = shuffle(IDENTIFICATION_BANK);
            if (count > 0) pool = pool.slice(0, count);

            questions = pool.map(q => ({
                chapter: q.chapter,
                question: q.question,
                answer: q.answer,
                accept: q.accept || []
            }));
        }
    }

    // ── Render Question ─────────────────────────────────────────────────
    function renderQuestion() {
        const q = questions[currentIndex];
        const total = questions.length;

        // Top bar
        els.qCounter.textContent = `${currentIndex + 1} / ${total}`;
        els.chapterBadge.textContent = `Chapter ${q.chapter}`;
        els.modeBadge.textContent = quizMode === "mc" ? "Multiple Choice" : "Identification";
        els.liveScore.textContent = score;
        els.progressFill.style.width = `${((currentIndex) / total) * 100}%`;

        // Question card — force re-animation
        els.questionCard.style.animation = "none";
        void els.questionCard.offsetHeight; // trigger reflow
        els.questionCard.style.animation = "";

        els.questionNumber.textContent = `Q${currentIndex + 1}`;
        els.questionText.textContent = q.question;

        // Hide feedback
        els.feedbackBar.classList.add("hidden");
        els.feedbackBar.classList.remove("correct-feedback", "wrong-feedback");

        // Disable next
        els.btnNext.disabled = true;
        answered = false;

        if (quizMode === "mc") {
            // ── Multiple Choice ──
            els.choicesGrid.classList.remove("hidden");
            els.identificationArea.classList.add("hidden");

            const letters = ["A", "B", "C", "D"];
            els.choicesGrid.innerHTML = "";
            q.choices.forEach((choice, idx) => {
                const btn = document.createElement("button");
                btn.className = "choice-btn";
                btn.setAttribute("id", `choice-${idx}`);
                btn.innerHTML = `
                    <span class="choice-letter">${letters[idx]}</span>
                    <span class="choice-text">${choice}</span>
                `;
                btn.addEventListener("click", () => handleMCAnswer(idx));
                els.choicesGrid.appendChild(btn);
            });
        } else {
            // ── Identification ──
            els.choicesGrid.classList.add("hidden");
            els.identificationArea.classList.remove("hidden");
            els.idAnswerInput.value = "";
            els.idAnswerInput.disabled = false;
            els.idAnswerInput.classList.remove("correct-input", "wrong-input");
            els.btnSubmitAnswer.disabled = false;
            els.btnSubmitAnswer.classList.remove("submitted");

            // Focus input after a brief delay for animation
            setTimeout(() => els.idAnswerInput.focus(), 150);
        }

        // Start timer
        startTimer();
        questionStartTime = Date.now();
    }

    // ── Timer ───────────────────────────────────────────────────────────
    function startTimer() {
        clearInterval(timerInterval);
        timerValue = 100;
        els.timerFill.style.width = "100%";
        els.timerFill.classList.remove("warning", "danger");

        const timerSec = getTimerSeconds();
        const step = 100 / (timerSec * 10); // update every 100ms
        timerInterval = setInterval(() => {
            timerValue -= step;
            if (timerValue <= 0) {
                timerValue = 0;
                clearInterval(timerInterval);
                if (!answered) {
                    handleTimeout();
                }
            }
            els.timerFill.style.width = timerValue + "%";

            if (timerValue < 20) {
                els.timerFill.classList.add("danger");
                els.timerFill.classList.remove("warning");
            } else if (timerValue < 45) {
                els.timerFill.classList.add("warning");
            }
        }, 100);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    // ── Handle MC Answer ────────────────────────────────────────────────
    function handleMCAnswer(selectedIdx) {
        if (answered) return;
        answered = true;
        stopTimer();

        const elapsed = (Date.now() - questionStartTime) / 1000;
        totalTime += elapsed;

        const q = questions[currentIndex];
        const isCorrect = selectedIdx === q.answer;
        const choiceBtns = els.choicesGrid.querySelectorAll(".choice-btn");

        // Disable all choices
        choiceBtns.forEach(btn => btn.classList.add("disabled"));

        // Mark selected
        choiceBtns[selectedIdx].classList.add(isCorrect ? "correct" : "wrong");

        // Always show the correct one
        if (!isCorrect) {
            choiceBtns[q.answer].classList.add("correct");
        }

        // Update score / streak
        if (isCorrect) {
            score++;
            streak++;
            if (streak > bestStreak) bestStreak = streak;
            els.liveScore.textContent = score;
        } else {
            streak = 0;
        }

        // Feedback
        showFeedback(isCorrect, q.choices[q.answer]);

        // Record history
        history.push({
            question: q.question,
            userAnswer: q.choices[selectedIdx],
            correctAnswer: q.choices[q.answer],
            correct: isCorrect,
            chapter: q.chapter
        });

        // Enable Next
        els.btnNext.disabled = false;

        // Update button text on last question
        if (currentIndex === questions.length - 1) {
            els.btnNext.querySelector("span").textContent = "Finish";
        }
    }

    // ── Handle Identification Answer ────────────────────────────────────
    function handleIDAnswer() {
        if (answered) return;
        const userText = els.idAnswerInput.value.trim();
        if (userText === "") return; // don't allow empty submission

        answered = true;
        stopTimer();

        const elapsed = (Date.now() - questionStartTime) / 1000;
        totalTime += elapsed;

        const q = questions[currentIndex];
        const normalizedUser = normalize(userText);
        const normalizedAnswer = normalize(q.answer);

        // Check against primary answer and all accepted alternatives
        let isCorrect = normalizedUser === normalizedAnswer;
        if (!isCorrect && q.accept) {
            isCorrect = q.accept.some(alt => normalize(alt) === normalizedUser);
        }

        // Visual feedback on the input
        els.idAnswerInput.disabled = true;
        els.btnSubmitAnswer.disabled = true;
        els.btnSubmitAnswer.classList.add("submitted");

        if (isCorrect) {
            els.idAnswerInput.classList.add("correct-input");
        } else {
            els.idAnswerInput.classList.add("wrong-input");
        }

        // Update score / streak
        if (isCorrect) {
            score++;
            streak++;
            if (streak > bestStreak) bestStreak = streak;
            els.liveScore.textContent = score;
        } else {
            streak = 0;
        }

        // Feedback
        showFeedback(isCorrect, q.answer);

        // Record history
        history.push({
            question: q.question,
            userAnswer: userText || "(No answer)",
            correctAnswer: q.answer,
            correct: isCorrect,
            chapter: q.chapter
        });

        // Enable Next
        els.btnNext.disabled = false;

        if (currentIndex === questions.length - 1) {
            els.btnNext.querySelector("span").textContent = "Finish";
        }
    }

    // ── Shared Feedback ─────────────────────────────────────────────────
    function showFeedback(isCorrect, correctAnswer) {
        els.feedbackBar.classList.remove("hidden", "correct-feedback", "wrong-feedback");
        if (isCorrect) {
            els.feedbackBar.classList.add("correct-feedback");
            els.feedbackIcon.textContent = "✅";
            const messages = ["Correct!", "Well done!", "Exactly right!", "Nailed it!", "Perfect!"];
            els.feedbackText.textContent = messages[Math.floor(Math.random() * messages.length)];
        } else {
            els.feedbackBar.classList.add("wrong-feedback");
            els.feedbackIcon.textContent = "❌";
            els.feedbackText.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        }
    }

    // ── Timeout ─────────────────────────────────────────────────────────
    function handleTimeout() {
        answered = true;
        stopTimer();

        const elapsed = getTimerSeconds();
        totalTime += elapsed;

        const q = questions[currentIndex];
        streak = 0;

        if (quizMode === "mc") {
            const choiceBtns = els.choicesGrid.querySelectorAll(".choice-btn");
            choiceBtns.forEach(btn => btn.classList.add("disabled"));
            choiceBtns[q.answer].classList.add("correct");

            els.feedbackBar.classList.remove("hidden", "correct-feedback", "wrong-feedback");
            els.feedbackBar.classList.add("wrong-feedback");
            els.feedbackIcon.textContent = "⏰";
            els.feedbackText.textContent = `Time's up! The correct answer is: ${q.choices[q.answer]}`;

            history.push({
                question: q.question,
                userAnswer: "(No answer — time ran out)",
                correctAnswer: q.choices[q.answer],
                correct: false,
                chapter: q.chapter
            });
        } else {
            els.idAnswerInput.disabled = true;
            els.btnSubmitAnswer.disabled = true;
            els.btnSubmitAnswer.classList.add("submitted");
            els.idAnswerInput.classList.add("wrong-input");

            els.feedbackBar.classList.remove("hidden", "correct-feedback", "wrong-feedback");
            els.feedbackBar.classList.add("wrong-feedback");
            els.feedbackIcon.textContent = "⏰";
            els.feedbackText.textContent = `Time's up! The correct answer is: ${q.answer}`;

            history.push({
                question: q.question,
                userAnswer: "(No answer — time ran out)",
                correctAnswer: q.answer,
                correct: false,
                chapter: q.chapter
            });
        }

        els.btnNext.disabled = false;
        if (currentIndex === questions.length - 1) {
            els.btnNext.querySelector("span").textContent = "Finish";
        }
    }

    // ── Next Question / Finish ──────────────────────────────────────────
    function nextQuestion() {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    }

    // ── Results ─────────────────────────────────────────────────────────
    function showResults() {
        showScreen("results");

        const total = questions.length;
        const percent = Math.round((score / total) * 100);
        const avgTime = (totalTime / total).toFixed(1);

        // Animate ring
        const circumference = 2 * Math.PI * 54; // r=54
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
            els.scoreRingCircle.style.transition = "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
            els.scoreRingCircle.style.strokeDashoffset = offset;
        }, 200);

        // Animate percent counter
        animateCounter(els.ringPercent, 0, percent, 1200, v => v + "%");

        // Title
        if (percent >= 90) els.resultsTitle.textContent = "Outstanding! 🏆";
        else if (percent >= 75) els.resultsTitle.textContent = "Great Job! 🎉";
        else if (percent >= 60) els.resultsTitle.textContent = "Good Effort! 👍";
        else if (percent >= 40) els.resultsTitle.textContent = "Keep Practicing! 💪";
        else els.resultsTitle.textContent = "Review the Material 📖";

        els.resultsSubtitle.textContent = `You answered ${score} out of ${total} correctly`;

        // Stats
        els.statCorrect.textContent = score;
        els.statWrong.textContent = total - score;
        els.statTime.textContent = avgTime + "s";
        els.statStreak.textContent = bestStreak;

        // Chapter breakdown
        renderBreakdown();

        // Review list
        renderReview();

        // Make sure review is hidden initially
        els.reviewList.classList.add("hidden");
    }

    function animateCounter(el, from, to, duration, formatter) {
        const start = performance.now();
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const value = Math.round(from + (to - from) * eased);
            el.textContent = formatter ? formatter(value) : value;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    function renderBreakdown() {
        els.breakdownBars.innerHTML = "";
        const chapters = [1, 2, 3];
        const chapterNames = { 1: "Ch 1: Structure", 2: "Ch 2: Intro", 3: "Ch 3: Memory" };

        chapters.forEach(ch => {
            const items = history.filter(h => h.chapter === ch);
            if (items.length === 0) return;
            const correct = items.filter(h => h.correct).length;
            const pct = Math.round((correct / items.length) * 100);

            const row = document.createElement("div");
            row.className = "breakdown-row";
            row.innerHTML = `
                <span class="breakdown-label">${chapterNames[ch]}</span>
                <div class="breakdown-bar-track">
                    <div class="breakdown-bar-fill ch${ch}" style="width: 0%"></div>
                </div>
                <span class="breakdown-score">${correct}/${items.length}</span>
            `;
            els.breakdownBars.appendChild(row);

            // Animate bar
            setTimeout(() => {
                row.querySelector(".breakdown-bar-fill").style.width = pct + "%";
            }, 400);
        });
    }

    function renderReview() {
        els.reviewList.innerHTML = "";
        history.forEach((h, i) => {
            const div = document.createElement("div");
            div.className = `review-item ${h.correct ? "review-correct" : "review-wrong"}`;
            div.innerHTML = `
                <div class="review-question">${i + 1}. ${h.question}</div>
                <div class="review-answer">
                    ${h.correct
                        ? `<span class="correct-answer">✓ ${h.correctAnswer}</span>`
                        : `<span class="your-answer">✗ Your answer: ${h.userAnswer}</span><br><span class="correct-answer">✓ Correct: ${h.correctAnswer}</span>`
                    }
                </div>
            `;
            els.reviewList.appendChild(div);
        });
    }

    // ── Reset ───────────────────────────────────────────────────────────
    function resetQuiz() {
        currentIndex = 0;
        score = 0;
        streak = 0;
        bestStreak = 0;
        totalTime = 0;
        history = [];
        answered = false;
        stopTimer();

        // Reset ring
        els.scoreRingCircle.style.transition = "none";
        els.scoreRingCircle.style.strokeDashoffset = 339.292;

        // Reset next button text
        els.btnNext.querySelector("span").textContent = "Next";

        showScreen("start");
    }

    // ── Event Listeners ─────────────────────────────────────────────────
    els.btnStart.addEventListener("click", () => {
        prepareQuestions();
        showScreen("quiz");
        renderQuestion();
    });

    els.btnNext.addEventListener("click", nextQuestion);

    els.btnRestart.addEventListener("click", resetQuiz);

    els.btnToggleReview.addEventListener("click", () => {
        els.reviewList.classList.toggle("hidden");
        const isHidden = els.reviewList.classList.contains("hidden");
        els.btnToggleReview.querySelector("span").textContent = isHidden ? "Review Answers" : "Hide Review";
    });

    // Submit answer for identification mode
    els.btnSubmitAnswer.addEventListener("click", handleIDAnswer);

    // Enter key submits in identification mode
    els.idAnswerInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !answered) {
            e.preventDefault();
            handleIDAnswer();
        }
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
        if (screens.quiz.classList.contains("active")) {
            if (quizMode === "mc" && !answered) {
                const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3 };
                const idx = keyMap[e.key.toLowerCase()];
                if (idx !== undefined) {
                    handleMCAnswer(idx);
                }
            }
            // Enter/Space for next (but not when typing in ID mode)
            if (answered && (e.key === "Enter" || e.key === " ")) {
                // Don't intercept if user is focused on the input
                if (document.activeElement !== els.idAnswerInput) {
                    e.preventDefault();
                    if (!els.btnNext.disabled) nextQuestion();
                }
            }
        } else if (screens.start.classList.contains("active")) {
            if (e.key === "Enter") {
                els.btnStart.click();
            }
        }
    });

})();
