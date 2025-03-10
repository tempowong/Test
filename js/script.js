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
function getFontSize() {
  if (localStorage.getItem('FontSize') === null){
    setFontsize('m');

  }else{
    console.log(localStorage.getItem('FontSize'));
    setFontsize(localStorage.getItem('FontSize')); 
  }
}

const setFontsize = (size) => {
  let thisSize = 'm';
  const validSizes = ['s', 'm', 'l'];

  if (size && validSizes.includes(size)) {
      thisSize = size;
  }

  let body = document.querySelector('body:not(.container)');
  /*let arr = document.getElementsByTagName("p");*/
  let classname = 'fontsize-' + thisSize;
  let bodyClassList = body.classList;
  let existingFontclass = Array.from(bodyClassList).find((x) => x.includes('fontsize-'));

  if (existingFontclass) {
      bodyClassList.replace(existingFontclass, classname);
      localStorage.setItem("FontSize", size);
  } else {
      bodyClassList.add(classname);
      localStorage.setItem("FontSize", size);
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

/*const mediaQuery = window.matchMedia('(max-width: 600px)');

          if (mediaQuery.matches) {
            console.log('Viewport is 600px or less');
            setFontsize('s');
          } else {
            console.log('Viewport is greater than 600px');
            setFontsize('l');
          }*/

window.onload = getFontSize();

// Initialize to default font size
/*setFontsize('m'); */
document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.tournament-wrapper');
  
  function checkScrollable() {
      if (wrapper.scrollWidth > wrapper.clientWidth) {
          wrapper.classList.add('scrollable');
      } else {
          wrapper.classList.remove('scrollable');
      }
  }


  checkScrollable();

  window.addEventListener('resize', checkScrollable);
});

// 圖片點擊放大功能
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    var captionText = document.getElementById('modalCaption');
    var closeBtn = document.getElementsByClassName('modal-close')[0];

    // 為所有比賽照片添加點擊事件
    document.querySelectorAll('.photo-item img').forEach(function(img) {
        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.nextElementSibling.innerHTML;
        }
    });

    // 關閉按鈕點擊事件
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // 點擊模態框外部關閉
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// 延遲加載非關鍵 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 延遲加載 AOS
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    document.body.appendChild(aosScript);
    
    aosScript.onload = function() {
        AOS.init();
    };
});