const roleElement = document.getElementById('animated-role');
const roles = ['Novice Software Engineer', 'Web Developer', 'Problem Solver', 'Quick Learner'];
const colors = ['#FFA07A', '#98FB98', '#87CEEB', '#DDA0DD'];
let currentIndex = 0;

function updateRole() {
  roleElement.style.color = colors[currentIndex];
  roleElement.textContent = roles[currentIndex];
  currentIndex = (currentIndex + 1) % roles.length;
}

// Initial call
updateRole();

// Update every minute
setInterval(updateRole, 60000);

// Add fade transition
roleElement.style.transition = 'color 0.5s ease';
