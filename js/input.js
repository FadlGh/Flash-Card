var test_form = document.getElementById("test-form");

function AddContainer() {
  test_form.innerHTML += `
    <div class="container">
        <div class="question-holder">
          <label>Question:</label>
          <input type="text" class="question" placeholder="Enter question" />
        </div>

        <div class="answer-holder">
          <label>Answer:</label>
          <input type="text" class="answer" placeholder="Enter answer" />
        </div>

                <div class="hint-holder">
          <label>Hint:</label>
          <input type="text" class="hint" placeholder="Enter hint" />
        </div>
      </div>`;
}

let flashcardsData = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    hint: "The Eiffel Tower is located here.",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    hint: "It's known for its massive size and great red spot.",
  },
];

function displayFlashcards() {
  const flashcardsContainer = document.getElementById("test-form");

  flashcardsData.forEach((flashcard) => {
    flashcardsContainer.innerHTML += `
                    <div class="question">Question: ${flashcard.question}</div>
                    <div class="answer">Answer: ${flashcard.answer}</div>
                    <div class="hint">Hint: ${flashcard.hint}</div>
                `;
  });
}

function addFlashcard() {
  const question = prompt("Enter the question:");
  const answer = prompt("Enter the answer:");
  const hint = prompt("Enter the hint:");

  // Check if the user canceled the input
  if (question === null || answer === null || hint === null) {
    return;
  }

  const newFlashcard = {
    question: question,
    answer: answer,
    hint: hint,
  };

  flashcardsData.push(newFlashcard);
}
