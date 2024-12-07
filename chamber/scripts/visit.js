
// Get the current time in milliseconds
const currentVisitTime = Date.now();

// Get the last visit time from localStorage
const lastVisitTime = localStorage.getItem('lastVisit');

// Get the sidebar element
const sidebar = document.getElementById('sidebar');

// Function to calculate the difference in days
function calculateDaysDifference(lastVisit, currentVisit) {
  const diffInMillis = currentVisit - lastVisit;
  const millisPerDay = 1000 * 60 * 60 * 24;
  return Math.floor(diffInMillis / millisPerDay);
}

// Check if the user has visited before
if (!lastVisitTime) {
  // If it's the user's first visit, display the welcome message
  sidebar.innerHTML = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate the number of days since the last visit
  const daysSinceLastVisit = calculateDaysDifference(Number(lastVisitTime), currentVisitTime);
  
  if (daysSinceLastVisit < 1) {
    // If less than a day has passed, display the "Back so soon" message
    sidebar.innerHTML = "Back so soon! Awesome!";
  } else {
    // If it's been 1 or more days, display the number of days since last visit
    const dayText = daysSinceLastVisit === 1 ? "day" : "days";
    sidebar.innerHTML = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
  }
}

// Store the current visit time in localStorage
localStorage.setItem('lastVisit', currentVisitTime);
