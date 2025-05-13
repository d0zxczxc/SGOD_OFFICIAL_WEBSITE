// Function to update the clock and date
function updateClock() {
  try {
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

    const clockElement = document.getElementById("philippines-clock");
    const dateElement = document.getElementById("philippines-date");

    if (clockElement && dateElement) {
      clockElement.innerText = currentTime;
      dateElement.innerText = currentDate;
    }
  } catch (error) {
    console.error('Error updating clock:', error);
  }
}

// For downloading SIPs
function downloadSIPs() {
  try {
    const link = document.createElement('a');
    link.href = 'SIPs.jpg';
    link.download = 'SIPs.jpg';
    
    // Check if file exists
    fetch(link.href)
      .then(response => {
        if (!response.ok) throw new Error('File not found');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
        alert('Sorry, the file could not be downloaded.');
      });
  } catch (error) {
    console.error('Error in downloadSIPs:', error);
  }
}

// Generic slideshow function
function createSlideshow(slideshowClass, dotClass, interval = 2500) {
  let slideIndex = 0;
  let intervalId = null;

  function showSlides() {
    try {
      const slides = document.getElementsByClassName(slideshowClass);
      const dots = document.getElementsByClassName(dotClass);

      if (!slides.length || !dots.length) return;

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    } catch (error) {
      console.error(`Error in slideshow ${slideshowClass}:`, error);
    }
  }

  function startSlideshow() {
    showSlides();
    intervalId = setInterval(showSlides, interval);
  }

  function stopSlideshow() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  return {
    start: startSlideshow,
    stop: stopSlideshow
  };
}

// Initialize slideshows
const seminarSlideshow = createSlideshow("mySlides1", "dot1");
const berfSlideshow = createSlideshow("mySlides2", "dot2");

// Start slideshows
seminarSlideshow.start();
berfSlideshow.start();

// Initialize clock
updateClock();
setInterval(updateClock, 1000);

// Cleanup on page unload
window.addEventListener('unload', () => {
  seminarSlideshow.stop();
  berfSlideshow.stop();
});

new Swiper(".mySwiper1", {
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".mySwiper1 .swiper-button-next",
    prevEl: ".mySwiper1 .swiper-button-prev"
  },
  pagination: {
    el: ".mySwiper1 .swiper-pagination",
    clickable: true
  }
});

new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".mySwiper2 .swiper-button-next",
    prevEl: ".mySwiper2 .swiper-button-prev"
  },
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true
  },
  lazy: true, // Enable lazy loading
});
  
// Function to display the content for the selected month
function showMonth(month) {
  // Hide all month content
  const months = document.querySelectorAll('.month-content');
  months.forEach(monthContent => {
    monthContent.style.display = 'none';
  });

  // Show the selected month content
  const selectedMonth = document.getElementById(month);
  if (selectedMonth) {
    selectedMonth.style.display = 'block';
  }
}
