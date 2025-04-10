// Function to update the clock and date
function updateClock() {
  const timeOptions = { 
    timeZone: 'Asia/Manila', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };
  
  const dateOptions = {
    timeZone: 'Asia/Manila',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };

  const now = new Date();
  const currentTime = now.toLocaleTimeString('en-US', timeOptions);
  const currentDate = now.toLocaleDateString('en-US', dateOptions);

  document.getElementById("philippines-clock").innerText = currentTime;
  document.getElementById("philippines-date").innerText = currentDate;
}

// For downloading SIPs
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

// Slideshow functionality
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
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
  
  // Change the slide every 4 seconds
  setTimeout(showSlides, 4000); 
}
