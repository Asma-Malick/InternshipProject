// JavaScript for cycling through each card
document.addEventListener("DOMContentLoaded", function() {
  var cards = document.querySelectorAll('.sol');
  var currentCardIndex = 0;

  function showNextCard() {
      // Hide the current card
      cards[currentCardIndex].classList.remove('active');

      // Move to the next card
      currentCardIndex = (currentCardIndex + 1) % cards.length;

      // Show the next card
      cards[currentCardIndex].classList.add('active');
  }

  // Show the first card initially
  cards[currentCardIndex].classList.add('active');

  // Set interval to change cards every 20 seconds
  setInterval(showNextCard, 5000);
});
