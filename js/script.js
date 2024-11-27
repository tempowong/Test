var btn = $('#totop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();

          const targetID = this.getAttribute("href");
          const targetElement = document.querySelector(targetID);

         
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
              });

              history.pushState(null, "", targetID);
          }
      });
  });
});
window.addEventListener("load", function() {
  const hash = window.location.hash;
  if (hash) {
      const scrollPosition = window.scrollY;
      window.scrollTo(0, scrollPosition);
    
      setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      }, 0);
  }
});
// set font size
const setFontsize = (size) => {
  let thisSize = 's';
  const validSizes = ['s', 'm', 'l'];

  if (size && validSizes.includes(size)) {
      thisSize = size;
  }

  let body = document.querySelector('html');
  let classname = 'fontsize-' + thisSize;
  let bodyClassList = body.classList;
  let existingFontclass = Array.from(bodyClassList).find((x) => x.includes('fontsize-'));

  if (existingFontclass) {
      bodyClassList.replace(existingFontclass, classname);
  } else {
      bodyClassList.add(classname);
  }

  // Clear previous selection
  const options = document.querySelectorAll('.font-size-options a');
  options.forEach(option => {
      option.classList.remove('on', 'active'); // Remove 'on' class from all options
  });
  // Add 'on' class to the selected option
  const currentOption = document.querySelector(`.font-size-options a[data-size="${thisSize}"]`);
  if (currentOption) {
      currentOption.classList.add('on'); // Mark selected option
      currentOption.classList.add('active'); 
  }
};

// Initialize to default font size
setFontsize('s'); 
