function flipCard() {
  const card = document.getElementById("flashcard");

  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}

let i = 0;
updateCard();

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

  question.innerHTML = JSON.parse(
    localStorage.getItem("Flashcard" + i)
  ).question;

  answer.innerHTML = JSON.parse(localStorage.getItem("Flashcard" + i)).answer;

  hint.innerHTML = JSON.parse(localStorage.getItem("Flashcard" + i)).hint;

  console.log(JSON.parse(localStorage.getItem("Flashcard" + i)).question);
  console.log(JSON.parse(localStorage.getItem("Flashcard" + i)).answer);
  console.log(
    "hint: " + JSON.parse(localStorage.getItem("Flashcard" + i)).hint
  );
  i++;
}

function clear() {
  localStorage.clear();
}
