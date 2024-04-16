// read more lidar
function toggleReadMore() {
  var additionalContent = document.getElementById('additional-content');
  var readMoreButton = document.querySelector('button');

  if (additionalContent.style.display === 'none') {
      additionalContent.style.display = 'block';
      readMoreButton.textContent = 'Read Less';
  } else {
      additionalContent.style.display = 'none';
      readMoreButton.textContent = 'Read More';
  }
}

// read more bathematry
function toggleReadMore1() {
  var additionalContent = document.getElementById('additional-content1');
  var readMoreButton = document.querySelector('button');

  if (additionalContent.style.display === 'none') {
      additionalContent.style.display = 'block';
      readMoreButton.textContent = 'Read Less';
  } else {
      additionalContent.style.display = 'none';
      readMoreButton.textContent = 'Read More';
  }
}



// slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Automatically change slides every 1500 milliseconds (1.5 seconds)
setInterval(function () {
  plusSlides(1);
}, 1000);

function openMapPage() {
  window.location.href = "map.html"; // Change "contact.html" to the actual path of your contact page
}