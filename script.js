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
}// for downloading
function downloadSIPs() {
  const link = document.createElement('a');
  link.href = 'SIPs.jpg'; // Path to your file
  link.download = 'SIPs.jpg'; // Desired filename on download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();