function flipCard() {
  const card = document.getElementById("flashcard");

  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}
