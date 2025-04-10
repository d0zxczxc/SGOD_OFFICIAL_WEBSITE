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




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // Reset to the first slide if it exceeds the number of slides
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and add the active class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Change the slide every 2 seconds
  setTimeout(showSlides, 4000); 
}


