document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 10,
    },
    {
      question: "What is the chemical symbol for Gold?",
      choices: ["Gd", "Go", "Ag", "Au"],
      answer: "Au",
      marks: 20,
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      choices: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
      marks: 30,
    },
    {
      question: "Which element has the atomic number 1?",
      choices: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
      answer: "Hydrogen",
      marks: 40,
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
      marks: 50,
    },
  ];

  let score = 0;
  let currentQuestionIndex = 0;

  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", handleNextQuestion);
  restartBtn.addEventListener("click", restartQuiz);

  function restartQuiz() {
    resultContainer.classList.add("hidden");
    score = 0;
    currentQuestionIndex = 0;
    startQuiz();
  }

  function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestions();
    } else {
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      showScore();
    }
  }

  function showScore() {
    scoreDisplay.textContent = `${score} out of ${questions.reduce((sum, question) => sum + question.marks, 0)}`;
  }

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestions();
  }

  function showQuestions() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(selectedChoice) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    const allChoices = document.querySelectorAll("#choices-list li");
    console.log(allChoices);

    allChoices.forEach((li) => {
      li.classList.add("disable");

      if (li.textContent === correctAnswer) {
        li.classList.add("correct");
      }

      if (
        li.textContent === selectedChoice &&
        selectedChoice !== correctAnswer
      ) {
        li.classList.add("wrong");
      }

      if (li.textContent === selectedChoice) {
        li.classList.add("selected");
      }
    });

    if (selectedChoice === correctAnswer) {
      score += questions[currentQuestionIndex].marks;
    }
    nextBtn.classList.remove("hidden");
  }
});
