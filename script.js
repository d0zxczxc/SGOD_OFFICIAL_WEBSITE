// Function to update the clock
function updateClock() {
  const options = { 
    timeZone: 'Asia/Manila', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };

  const currentTime = new Date().toLocaleTimeString('en-US', options);
  document.getElementById("philippines-clock").innerText = currentTime;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
