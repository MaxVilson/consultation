var textToggle = document.querySelector('.about-us__text-toggle');
  var textLink = document.querySelector('.about-us__link');
  textLink.onclick = function() {
    textToggle.classList.toggle('about-us__text-toggle--open');
  };
