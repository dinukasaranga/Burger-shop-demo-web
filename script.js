
function changeTextColor() {
  const heroText = document.querySelector('.hero h1');
  const colors = ['#e5cb7a', '#32c704', '	#d6b685', '#ec3521', '	#e5cb7a'];
  let counter = 0;

  setInterval(() => {
    heroText.style.color = colors[counter];
    counter = (counter + 1) % colors.length;
  }, 1000);
}

// Call the text color animation function when the page loads
window.onload = function () {
  changeTextColor();
};


// Toggle menu for mobile
const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});