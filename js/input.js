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
      </div>`;
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

  // Call the display function to show the updated flashcards
  displayFlashcards();
}
