let i = 0;

updateCard();

function flipCard() {
  const card = document.getElementById("flashcard");

  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }

  const answerElement = document.getElementById("answer-input");
  if (answerElement) {
    const answer = answerElement.value;
    i--;
    const cardData = JSON.parse(localStorage.getItem("Flashcard" + i));
    const correctAnswer = cardData.answer;
    i++;

    if (correctAnswer === answer) {
      console.log("yaya");
      console.log(answer);
      console.log(correctAnswer);
    } else {
      console.log("nope");
      console.log(answer);
      console.log(correctAnswer);
    }
  }
}

function updateCard() {
  if (localStorage.length < i + 1) {
    return;
  }

  const card = document.getElementById("flashcard");

  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  }

  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const hint = document.getElementById("hint");

  const cardData = JSON.parse(localStorage.getItem("Flashcard" + i));
  question.textContent = cardData.question;
  answer.textContent = cardData.answer;
  hint.textContent = cardData.hint;

  i++;
}
