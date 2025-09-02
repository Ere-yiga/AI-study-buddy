const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
];

function renderFlashcards() {
  const container = document.getElementById("flashcards-container");

  container.innerHTML = "<h2>Flashcards</h2>";
  flashcards.forEach((card, idx) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "flashcard";
    cardDiv.innerHTML = `
			<div class="flashcard-inner">
				<div class="flashcard-front">${card.question}</div>
				<div class="flashcard-back">${card.answer}</div>
			</div>
		`;
    cardDiv.addEventListener("click", () => {
      cardDiv.classList.toggle("flipped");
    });
    container.appendChild(cardDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-notes");
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const notes = document.getElementById("study-notes").value;
      alert("Notes submitted: " + notes);
    });
  }
  renderFlashcards();
});
