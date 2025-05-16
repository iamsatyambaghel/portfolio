// Initialize AOS (Animate On Scroll) library
AOS.init({
  duration: 1200, // Animation duration
});

// Function to toggle the navbar for mobile view
function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Automatically close the navbar on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".navbar nav").classList.contains("active")) {
    document.querySelector(".navbar nav").classList.remove("active");
  }
});

// Typewriter effect
const words = ["DEVELOPER", "DESIGNER", "CREATOR", "INNOVATOR"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const typewriterElement = document.getElementById("typewriter");
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 2000;

// Function to type out the words
function type() {
  if (currentCharIndex < words[currentWordIndex].length) {
    typewriterElement.textContent +=
      words[currentWordIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

// Function to erase the words
function erase() {
  if (currentCharIndex > 0) {
    typewriterElement.textContent = words[currentWordIndex].substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

// Start the typewriter effect when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenWords);
});