const name = document.getElementById("name")

function info();{
name.textContent = "Brian"
}
info();






// Select the navigation list
const navList = document.querySelector('.nav-list');

// Add a click event listener to the navigation list
navList.addEventListener('click', function(event) {
  // Check if the clicked element is a link
  if (event.target.tagName === 'A') {
    // Prevent the default link behavior (navigation)
    event.preventDefault();

    // Get the URL from the clicked link
    const href = event.target.getAttribute('href');

    // Simulate a smooth scroll to the target section (optional)
    smoothScroll(href);
  }
});

// Function to simulate smooth scrolling (replace with your preferred library if needed)
function smoothScroll(target) {
  const element = document.querySelector(target);
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const targetY = element.offsetTop + scrollY;
  const distance = targetY - scrollY;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = easeInOutQuad(timeElapsed, distance, 1200);
    window.scrollTo(0, scrollY + ease);
    if (timeElapsed < 1200) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutQuad(t, b, c) {
    t /= c / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
