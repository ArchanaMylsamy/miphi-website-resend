(function ($) {

  "use strict";

  var countdownTimer = function() {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    $('#countdown-clock').each(function(){
      const deadline = new Date(Date.parse(new Date()) + 28 * 24 * 60 * 60 * 1000);
      initializeClock('countdown-clock', deadline);
    });
  }

  var initScrollSpy = function() {
    
    /** Scroll Spy */
    const links = document.querySelectorAll(".scrollspy-link a");
    const sections = document.querySelectorAll(".scrollspy-section");
    const indicator = document.querySelector(".scrollspy-indicator");

    /*
    links.forEach((link) => {
      link.onclick = () => {
        sections.forEach((section) => {
          if (link.dataset.target === section.id) {
            document.documentElement.scrollTop = section.offsetTop;
          }
        });
      };
    });
    */

    window.onscroll = () => scrollspy();
    window.onload = () => scrollspy();
    window.onresize = () => scrollspy();

    const scrollspy = () => {
      const pageYPosition = document.documentElement.scrollTop || document.body.scrollTop;
      sections.forEach((section) => {
        const sectionYPosition = section.offsetTop;

        if (pageYPosition > sectionYPosition - 20) { // - 160 - 150
          links.forEach((link) => {
            // console.log(link.dataset.target + '===' + section.id);
            if (link.dataset.target === section.id) {
              indicator.style.left = `${link.closest('.scrollspy-link').offsetLeft}px`;
              indicator.style.width = `${link.closest('.scrollspy-link').offsetWidth}px`;
            }
          });
        }
      });
    };

    scrollspy();
  }

  var initSlider = function () {

    $('.swiper').each(function(){

      var swiper = new Swiper(".review-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        pagination: {
          el: "#testimonials .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: "#our-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
      
      var swiper = new Swiper(".product-slideshow", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".product-slideshow .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      });

    });

  };

  var initScrollNav = function () {
    var scroll = $(window).scrollTop();
    var textColor = $('.site-header').data("text-color");
    
    if (scroll >= 200) {
      $('.site-header.position-fixed').addClass("bg-white").removeClass("text-white").addClass("text-dark");
    } else {
      $('.site-header.position-fixed').removeClass("bg-white").removeClass("text-dark").addClass("text-"+textColor);
    }
  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  $(window).scroll(function () {
    initScrollNav();
  });

// timeline section

/* Check the location of each element */
$('.unique-content').each(function(i) {
	var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	var bottom_of_window = $(window).height();

	if (bottom_of_object > bottom_of_window) {
		$(this).addClass('hidden-unique');
	}
});

$(window).scroll(function() {
	/* Check the location of each element hidden */
	$('.hidden-unique').each(function(i) {
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fadeIn it */
		if (bottom_of_window > bottom_of_object) {
			$(this).animate({ opacity: '1' }, 700);
		}
	});
});




  $(document).ready(function () {

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585
    });
    
    // document ready
    $(document).ready(function () {
      initScrollNav();
      initScrollSpy();
      initSlider();
      countdownTimer();
      initJarallax();

      AOS.init({
        duration: 1200,
        once: true,
      })
    }); // document ready

  }); // End of a document

 

})(jQuery);




//contact form


//disable right click


  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

  function showDetails(id) {
    var details = document.getElementById(id);
    details.classList.toggle('active');
  }
  
 

function searchFunction() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('author_name');
  resultsDiv.innerHTML = '';  // Clear previous results

  const allTextElements = document.querySelectorAll('body *'); // Target all elements in body

  allTextElements.forEach(element => {
      if (element.innerText && element.innerText.toLowerCase().includes(input)) {
          // Highlight the search results and add them to the results section
          resultsDiv.innerHTML += `<p>${element.innerText}</p>`;
      }
  });
}
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function redirectOnBigScreensAidaptiv(event){
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'aidaptiv.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}
function redirectOnBigScreensAidaptiv1(event){
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'pages/aidaptiv.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}
function redirectOnBigScreensAbout(event) {
  // Check if the screen width is 1024px or greater
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'about.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}

function redirectOnBigScreensEnterprise(event) {
  // Get the window width
  var screenWidth = window.innerWidth;

  // Check if the screen width is greater than or equal to 1024px
  if (screenWidth >1024) {
    // Allow redirect for large screens
    window.location.href = 'enterprise.html';
  } else {
    // Prevent redirect for smaller screens
    event.preventDefault();
  }
}
function redirectOnBigScreens(event) {
  // Check if the screen width is 1024px or greater
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'product.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}
function redirectOnBigScreensAbout1(event) {
  // Check if the screen width is 1024px or greater
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'pages/about.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}

function redirectOnBigScreensEnterprise1(event) {
  // Get the window width
  var screenWidth = window.innerWidth;

  // Check if the screen width is greater than or equal to 1024px
  if (screenWidth >1024) {
    // Allow redirect for large screens
    window.location.href = 'pages/enterprise.html';
  } else {
    // Prevent redirect for smaller screens
    event.preventDefault();
  }
}
function redirectOnBigScreens1(event) {
  // Check if the screen width is 1024px or greater
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'pages/product.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.aidaptiv-nav__link');
  const sections = document.querySelectorAll('.aidaptiv-section');
  const dropdownLinks = document.querySelectorAll('.dropdown-item-spl');

  // Function to check if we're on the aidaptiv page
  function isAidaptivPage() {
    return window.location.pathname.includes('aidaptiv.html');
  }

  // Handle dropdown navigation clicks
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // If we're not on the aidaptiv page, let the normal navigation happen
      if (!isAidaptivPage()) {
        // Don't prevent default - let the browser handle the navigation
        return true;
      }
      
      // If we are on the aidaptiv page, handle it with our custom logic
      e.preventDefault();
      if (href && href.includes('#')) {
        const targetId = href.split('#')[1];
        showSection(targetId);
      }
    });
  });

  // Only run the rest of the navigation logic if we're on the aidaptiv page
  if (isAidaptivPage()) {
    // Show first section by default, unless URL has a hash
    function initializePage() {
      const hash = window.location.hash;
      if (hash && hash.includes('aidaptiv-')) {
        const targetId = hash.replace('#', '');
        showSection(targetId, true);
      } else {
        sections[0].classList.add('active');
        navLinks[0].classList.add('active');
      }
    }

    function showSection(targetId, isInitialLoad = false) {
      // Hide all sections and remove active class from nav links
      sections.forEach(section => section.classList.remove('active'));
      navLinks.forEach(link => link.classList.remove('active'));

      // Show target section and add active class to clicked nav link
      const targetSection = document.getElementById(targetId);
      const clickedLink = document.querySelector(`[data-target="${targetId}"]`);
      
      if (targetSection) {
        targetSection.classList.add('active');
        if (clickedLink) {
          clickedLink.classList.add('active');
        }
        
        // Scroll the section into view with smooth behavior
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: isInitialLoad ? 'auto' : 'smooth',
            block: 'start'
          });
        }, 100);

        // Update URL without page reload
        history.pushState(null, '', `#${targetId}`);
      }
    }

    // Handle main navigation clicks
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        showSection(targetId);
      });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
      const hash = window.location.hash;
      if (hash && hash.includes('aidaptiv-')) {
        const targetId = hash.replace('#', '');
        showSection(targetId);
      } else {
        // If no hash, show first section
        sections[0].classList.add('active');
        navLinks[0].classList.add('active');
      }
    });

    // Initialize page
    initializePage();
  }
});
function populateTable(data) {
  const tableBody = document.querySelector('.ai-table-body');
  const headers = ['Model Name', 'Task Type', 'Pretrain Weight', 'Model Size'];

  data.forEach(item => {
    const row = document.createElement('tr');
    
    headers.forEach((header, index) => {
      const cell = document.createElement('td');
      cell.textContent = Object.values(item)[index];
      cell.setAttribute('data-label', header);
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

  const tableData = [
    { no: 1, taskType: "automatic-speech-recognition", modelName: "Whisper v2", pretrainWeight: "1.54B", modelSize: "5.8 GB" },
    { no: 2, taskType: "automatic-speech-recognition", modelName: "Whisper v3", pretrainWeight: "1.54B", modelSize: "3.1 GB" },
    { no: 3, taskType: "fill-mask", modelName: "Bert", pretrainWeight: "110M", modelSize: "104MB" },
    { no: 4, taskType: "text_generation", modelName: "Gemma2_9b", pretrainWeight: "9B", modelSize: "18GB" },
    { no: 5, taskType: "text_generation", modelName: "Gemma2_27b", pretrainWeight: "27B", modelSize: "51GB" },
    { no: 6, taskType: "text_generation", modelName: "Llama3.1_8b", pretrainWeight: "8B", modelSize: "15GB" },
    { no: 7, taskType: "text_generation", modelName: "Llama3.1_70b", pretrainWeight: "70B", modelSize: "132GB" },
    { no: 8, taskType: "text_generation", modelName: "Llama3.1_405b", pretrainWeight: "405B", modelSize: "764GB" },
    { no: 9, taskType: "text_generation", modelName: "Llama II", pretrainWeight: "7B", modelSize: "13GB" },
    { no: 10, taskType: "text_generation", modelName: "Llama II", pretrainWeight: "13B", modelSize: "25GB" },
    { no: 11, taskType: "text_generation", modelName: "Llama II", pretrainWeight: "70B", modelSize: "129GB" },
    { no: 12, taskType: "text_generation", modelName: "Llama III", pretrainWeight: "8B", modelSize: "15GB" },
    { no: 13, taskType: "text_generation", modelName: "Llama III", pretrainWeight: "70B", modelSize: "132GB" },
    { no: 14, taskType: "text_generation", modelName: "Llama-3-Taiwan-70B-Instruct", pretrainWeight: "70B", modelSize: "132GB" },
    { no: 15, taskType: "text_generation", modelName: "LlamaGuard-7b", pretrainWeight: "7B", modelSize: "13B" },
    { no: 16, taskType: "text_generation", modelName: "Meta-Llama-3-8B", pretrainWeight: "8B", modelSize: "15GB" },
    { no: 17, taskType: "text_generation", modelName: "Meta-Llama-3-70B", pretrainWeight: "70B", modelSize: "132GB" },
    { no: 18, taskType: "text_generation", modelName: "Phind-CodeLlama-34B-v1", pretrainWeight: "34B", modelSize: "63GB" },
    { no: 19, taskType: "text_generation", modelName: "Code Llama", pretrainWeight: "7B", modelSize: "14GB" },
    { no: 20, taskType: "text_generation", modelName: "Code Llama", pretrainWeight: "13B", modelSize: "64GB" },
    { no: 21, taskType: "text_generation", modelName: "Code Llama", pretrainWeight: "70B", modelSize: "135GB" },
    { no: 22, taskType: "text_generation", modelName: "Mistral", pretrainWeight: "7B", modelSize: "15GB" },
    { no: 23, taskType: "text_generation", modelName: "Mixtral 8x7B", pretrainWeight: "8x7B", modelSize: "87GB" },
    { no: 24, taskType: "text_generation", modelName: "Mixtral 8x22B", pretrainWeight: "8x22B", modelSize: "262GB" },
    { no: 25, taskType: "text_generation", modelName: "TAIDE", pretrainWeight: "7B", modelSize: "13GB" },
    { no: 26, taskType: "text_generation", modelName: "Breeze", pretrainWeight: "7B", modelSize: "14GB" },
    { no: 27, taskType: "text_generation", modelName: "Vicuna", pretrainWeight: "33B", modelSize: "65GB" },
    { no: 28, taskType: "text_generation", modelName: "Falcon", pretrainWeight: "180B", modelSize: "360GB" },
    { no: 29, taskType: "text_generation", modelName: "Qwen2-7B", pretrainWeight: "7B", modelSize: "15GB" },
    { no: 30, taskType: "text_generation", modelName: "Qwen2-72B", pretrainWeight: "72B", modelSize: "136GB" },
    { no: 31, taskType: "text_generation", modelName: "Qwen2-72B-Instruct", pretrainWeight: "72B", modelSize: "136GB" },
    { no: 32, taskType: "text_generation", modelName: "Qwen1.5-0.5B-Chat", pretrainWeight: "0.5B", modelSize: "1.2GB" },
    { no: 33, taskType: "text_generation", modelName: "Qwen1.5-1.8B-Chat", pretrainWeight: "1.8B", modelSize: "3.5GB" },
    { no: 34, taskType: "text_generation", modelName: "Qwen1.5-4B-Chat", pretrainWeight: "4B", modelSize: "7.4GB" },
    { no: 35, taskType: "text_generation", modelName: "Qwen1.5-7B-Chat", pretrainWeight: "7B", modelSize: "14GB" },
    { no: 36, taskType: "text_generation", modelName: "Qwen1.5-14B-Chat", pretrainWeight: "14B", modelSize: "27GB" },
    { no: 37, taskType: "text_generation", modelName: "Qwen1.5-72B-Chat", pretrainWeight: "72B", modelSize: "135GB" },
    { no: 38, taskType: "text_generation", modelName: "Qwen1.5-110B-Chat", pretrainWeight: "110B", modelSize: "208GB" },
    { no: 39, taskType: "text_generation", modelName: "chatglm-6b", pretrainWeight: "6B", modelSize: "12GB" },
    { no: 40, taskType: "text_generation", modelName: "chatglm3-6b", pretrainWeight: "6B", modelSize: "11GB" },
    { no: 41, taskType: "text_generation", modelName: "deepseek-llm-7b-chat", pretrainWeight: "7B", modelSize: "13GB" },
    { no: 42, taskType: "text_generation", modelName: "deepseek-llm-67b-chat", pretrainWeight: "67B", modelSize: "126GB" },
    { no: 43, taskType: "text_generation", modelName: "deepseek-moe-16b-chat", pretrainWeight: "16B", modelSize: "31GB" },
    { no: 44, taskType: "text_generation", modelName: "Baichuan-7B", pretrainWeight: "7B", modelSize: "14GB" },
    { no: 45, taskType: "text_generation", modelName: "Baichuan2-7B-Chat", pretrainWeight: "7B", modelSize: "14GB" },
    { no: 46, taskType: "text_generation", modelName: "Yi-1.5-6B", pretrainWeight: "6B", modelSize: "12GB" },
    { no: 47, taskType: "text_generation", modelName: "Yi-1.5-9B-Chat", pretrainWeight: "9B", modelSize: "17GB" },
    { no: 48, taskType: "text_generation", modelName: "Yi-1.5-34B-Chat", pretrainWeight: "34B", modelSize: "65GB" },
    { no: 49, taskType: "text_generation", modelName: "Yuan2-M32-hf", pretrainWeight: "40B", modelSize: "75GB" },
    { no: 50, taskType: "text_generation", modelName: "Nemtron- 70B", pretrainWeight: "70B", modelSize: "112GB" },
    { no: 51, taskType: "text_generation", modelName: "Facebook/opt-125m", pretrainWeight: "0.125B", modelSize: "1.5GB" },
    { no: 52, taskType: "zero-short image classification", modelName: "clip-vit-large-patch14", pretrainWeight: "428M", modelSize: "13GB" },
    { no: 53, taskType: "image-classification", modelName: "resnet-50", pretrainWeight: "25.6M", modelSize: "785MB" },
    { no: 54, taskType: "image-text-to-text", modelName: "paligemma2-3b-pt-224", pretrainWeight: "3.03B", modelSize: "5.7GB" },
];


document.addEventListener('DOMContentLoaded', function() {
  // Function to convert size string to standardized number for sorting
  function convertPretrainWeight(weightStr) {
      const number = parseFloat(weightStr);
      if (weightStr.includes('M')) return number * 0.001;
      if (weightStr.includes('B')) return number;
      return number;
  }

  // Sort the data by pretrain weight in descending order
  const sortedData = tableData.sort((a, b) => {
      const weightA = convertPretrainWeight(a.pretrainWeight);
      const weightB = convertPretrainWeight(b.pretrainWeight);
      return weightB - weightA;
  });

  // Function to render table
  function renderTable() {
      const tableBody = document.querySelector('.ai-table-body');
      if (!tableBody) return;

      const rows = sortedData.map(row => `
          <tr>
             
              <td>${row.modelName}</td>
              <td>${row.taskType}</td>
              <td>${row.pretrainWeight}</td>
              <td>${row.modelSize}</td>
          </tr>
      `).join('');

      tableBody.innerHTML = rows;
  }

  // Initial render of sorted table
  renderTable();

  // Optional: Add click handlers for header sorting
  const headers = document.querySelectorAll('.ai-table-header');
  let currentSort = { column: 'pretrainWeight', direction: 'desc' };

  headers.forEach(header => {
      header.addEventListener('click', () => {
          const column = header.dataset.sort;
          const direction = 
              currentSort.column === column && currentSort.direction === 'desc' 
              ? 'asc' 
              : 'desc';

          // Update sort indicators
          headers.forEach(h => h.classList.remove('active', 'asc', 'desc'));
          header.classList.add('active', direction);

          // Update current sort
          currentSort = { column, direction };

          // Sort data
          sortedData.sort((a, b) => {
              let aVal = a[column];
              let bVal = b[column];

              // Special handling for pretrain weights
              if (column === 'pretrainWeight') {
                  aVal = convertPretrainWeight(a.pretrainWeight);
                  bVal = convertPretrainWeight(b.pretrainWeight);
              }

              if (typeof aVal === 'string') {
                  return direction === 'asc' 
                      ? aVal.localeCompare(bVal)
                      : bVal.localeCompare(aVal);
              }

              return direction === 'asc' ? aVal - bVal : bVal - aVal;
          });

          renderTable();
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tableData = [
      {
          type: "AI PC",
          model: "M-50 Gen 4",
          gpu: "1 x A2000 (16) / 64GB DRAM",
          cache: "640GB Cache",
          training: "1 x 13B",
          concurrent: "2 x 7B (or)\n5 x 125m",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (any one)"
      },
      {
          type: "AI WS",
          model: "M-200",
          gpu: "2 x A2000 (32GB) / 256GB RAM",
          cache: "640GB Cache",
          training: "2 x 34B",
          concurrent: "4 x 13B (or)\n10 x 125m",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (any 2)"
      },
      {
          type: "AI WS",
          model: "M-300",
          gpu: "2 x A4000 (40GB) / 512GB RAM",
          cache: "1.2TB Cache",
          training: "1 x 70B",
          concurrent: "2 x 34B (or)\n6 x 13B (or) 15 x 125m",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (any 4)"
      },
      {
          type: "AI Server",
          model: "M-400",
          gpu: "2 x A6000 (96GB) / 1TB RAM",
          cache: "2TB Cache",
          training: "1 x 90B",
          concurrent: "1 x 70B + 3 x 13B (or)\n2 x 34B (or) 8 x 13B (or)\n10 x 7B (or) 20 x 125m",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (all in parallel)"
      },
      {
          type: "AI Server",
          model: "M-500",
          gpu: "4 x A6000 (196GB) / 2TB RAM",
          cache: "4TB Cache",
          training: "1 x 220B",
          concurrent: "1 x 180B + 4 x 13B (or)\n2 x 70B + 4 x 13B (or) 30 x 125m",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (2 x all in parallel)"
      },
      {
          type: "AI Server",
          model: "M-600",
          gpu: "8 x A6000 (384GB) / 4TB RAM",
          cache: "8TB Cache",
          training: "1 x 405B",
          concurrent: "2 x 180B (or)\n50 x 125m",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (4 x all in parallel)"
      },
      {
          type: "AI Server",
          model: "M-700",
          gpu: "8 x H100 (680GB) / 8TB RAM",
          cache: "16TB Cache",
          training: "2 x 405B",
          concurrent: "4 x 180B",
          inference: "Text-Text, Image-Text, Image-Image, Text-Image, Speech-Text, Text-Speech (8 x all in parallel)"
      }
  ];

  const tableBody = document.getElementById('ai-solutions-body');

  function renderTable() {
      tableBody.innerHTML = tableData.map(row => `
          <tr>
              <td class="ai-type-cell">${row.type}</td>
              <td class="ai-model-cell">${row.model}</td>
              <td class="ai-specs-cell">${row.gpu}</td>
              <td class="ai-cache-cell">${row.cache}</td>
              <td class="ai-training-cell">${row.training}</td>
              <td class="ai-concurrent-cell">${row.concurrent}</td>
              <td class="ai-inference-cell">${row.inference}</td>
          </tr>
      `).join('');
  }

  // Initialize table
  renderTable();

  // Add indicator for horizontal scroll on mobile
  const tableWrapper = document.querySelector('.ai-solutions-wrapper');
  if (tableWrapper.scrollWidth > tableWrapper.clientWidth) {
      tableWrapper.classList.add('scrollable');
  }
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year to the element with id 'current-year'
document.getElementById('current-year').textContent = currentYear;




document.querySelectorAll('.policy-header').forEach(header => {
  header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.policy-item').forEach(accordionItem => {
          accordionItem.classList.remove('active');
      });

      // If the clicked item wasn't active, open it
      if (!isActive) {
          item.classList.add('active');
      }
  });
});
    