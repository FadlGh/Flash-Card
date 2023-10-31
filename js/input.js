var test_form = document.getElementById("test-form");
const questions = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
const hint = document.getElementsByClassName("hint");

function AddContainer() {
  test_form.innerHTML += `
    <div class="container">
        <div class="question-holder">
          <label>Question:</label>
          <input type="text" class="question" placeholder="Enter question" maxlength="100"/>
        </div>

        <div class="answer-holder">
          <label>Answer:</label>
          <input type="text" class="answer" placeholder="Enter answer" maxlength="150"/>
        </div>

                <div class="hint-holder">
          <label>Hint:</label>
          <input type="text" class="hint" placeholder="Enter hint" maxlength="150"/>
        </div>
      </div>`;
}

function Submit() {
  for (let i = 0; i < questions.length; i++) {
    const questionText = questions[i].value;
    const answerText = answer[i].value;
    const hintText = hint[i].value;

    localStorage.setItem(
      "Flashcard" + i,
      JSON.stringify({
        question: questionText,
        answer: answerText,
        hint: hintText,
      })
    );
  }
}
