const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C'
];

const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.buttons');

buttons.forEach((btn) => {
  const button = document.createElement('button');
  button.textContent = btn;
  button.addEventListener('click', () => {
    if (btn === 'C') {
      display.value = '';
      return;
    }
    if (btn === '=') {
      try {
        // Evaluate the math expression
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
      return;
    }
    display.value += btn;
  });
  buttonsContainer.appendChild(button);
});
const gif = document.getElementById("anakinGif");
const sound = document.getElementById("funnySound");

gif.addEventListener("click", () => {
  gif.classList.add("wiggle");
  sound.currentTime = 0; // Rewind if already playing
  sound.play();

  // Remove the animation class after it finishes
  setTimeout(() => {
    gif.classList.remove("wiggle");
  }, 400); // Match animation duration
});
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${x - 10}px`;
  heart.style.top = `${y - 10}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

gif.addEventListener("click", (e) => {
  gif.classList.add("wiggle");
  sound.currentTime = 0;
  sound.play();

  // Heart spawn location (center of image or click)
  const rect = gif.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  createHeart(x, y);

  setTimeout(() => {
    gif.classList.remove("wiggle");
  }, 800);
});