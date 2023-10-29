var test_form = document.getElementById("test-form");

function AddContainer() {
  test_form.innerHTML += `
    <div class="container">
        <div class="question-holder">
          <label for="question">Question:</label>
          <input type="text" class="question" placeholder="Enter question" />
        </div>

        <div class="answer-holder">
          <label for="answer">Answer:</label>
          <input type="text" class="answer" placeholder="Enter answer" />
        </div>
      </div>`;
}
