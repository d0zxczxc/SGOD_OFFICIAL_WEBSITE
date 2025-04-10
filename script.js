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


let slideIndex1 = 0;
let slideIndex2 = 0;

showSlides1(); // For the first slideshow (Seminar)
showSlides2(); // For the second slideshow (BERF)

function showSlides1() {
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots1 = document.getElementsByClassName("dot1");
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (let i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1 - 1].style.display = "block";  
  dots1[slideIndex1 - 1].className += " active";
  setTimeout(showSlides1, 2500); // Change slide every 2 seconds
}

function showSlides2() {
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (let i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";  
  dots2[slideIndex2 - 1].className += " active";
  setTimeout(showSlides2, 2500); // Change slide every 2 seconds
}

