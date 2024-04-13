  function setActive(index) {
    // Get all navigation items
    var navItems = document.querySelectorAll('nav a');

    // Remove the 'active' class from all items
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Add the 'active' class to the selected item
    navItems[index].classList.add('active');
  }

  
// live date update
// JavaScript to update the date in real-time
function updateLiveDate() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  var formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById('liveDate').textContent = formattedDate;
}
// Update the date immediately and then every second
updateLiveDate();
setInterval(updateLiveDate, 1000);



// slide images for banner
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
  }, 3000);
  
  
  // services
  function showService(){
    window.location.href='./service.html';
  }

 // Features
 function showFeatures(){
  window.location.href='./features.html';
}
 
//Steps
// function showStep(){
//   window.location.href='./steps.html';
// }

// govt logo link

function digitalIndia() {
    window.location.href = 'https://csc.gov.in/digitalIndia';
}
function Mudra() {
    window.location.href = 'https://www.mudra.org.in/';
}
function swatchBharat() {
    window.location.href = 'https://swachhbharatmission.gov.in/sbmcms/index.htm';
}
function skillIndia() {
    window.location.href = 'https://www.skillindiadigital.gov.in/home';
}
function g2O() {
    window.location.href = 'https://g20.mygov.in/';
}
function myGov() {
    window.location.href = 'https://g20.mygov.in/';
}
function aadhar() {
    window.location.href = 'https://uidai.gov.in/en/';
}
function govtOfIndia() {
    window.location.href = 'https://www.india.gov.in/';
}
function lokpal() {
    window.location.href = 'https://www.lokpal.gov.in/#:~:text=Acting%20Chairperson%2C%20Lokpal&text=The%20Act%20came%20into%20force,from%2028th%20May%2C2022.';
}
function worldFoodIndia() {
    window.location.href = 'https://worldfoodindia.gov.in/';
}
function IndianPost() {
    window.location.href = 'https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx';
}

// read more for step
// step1
function showStep1() {
  document.getElementById("overlay-s1").style.display = "block";
  document.getElementById("popupContainer-s1").style.display = "block";
}
function hide1() {
  document.getElementById("overlay-s1").style.display = "none";
  document.getElementById("popupContainer-s1").style.display = "none";
}

//step2
function showStep2() {
  document.getElementById("overlay-s2").style.display = "block";
  document.getElementById("popupContainer-s2").style.display = "block";
}
function hide2() {
  document.getElementById("overlay-s2").style.display = "none";
  document.getElementById("popupContainer-s2").style.display = "none";
}

// step3
function showStep3() {
  document.getElementById("overlay-s3").style.display = "block";
  document.getElementById("popupContainer-s3").style.display = "block";
}
function hide3() {
  document.getElementById("overlay-s3").style.display = "none";
  document.getElementById("popupContainer-s3").style.display = "none";
}

//step4
function showStep4(){
  document.getElementById("overlay-s4").style.display = "block";
  document.getElementById("popupContainer-s4").style.display = "block";
}
function hide4() {
  document.getElementById("overlay-s4").style.display = "none";
  document.getElementById("popupContainer-s4").style.display = "none";
}

// step5
function showStep5(){
  document.getElementById("overlay-s5").style.display = "block";
  document.getElementById("popupContainer-s5").style.display = "block";
}
function hide5() {
  document.getElementById("overlay-s5").style.display = "none";
  document.getElementById("popupContainer-s5").style.display = "none";
}

//step6
function showStep6() {
  document.getElementById("overlay-s6").style.display = "block";
  document.getElementById("popupContainer-s6").style.display = "block";
}
function hide6() {
  document.getElementById("overlay-s6").style.display = "none";
  document.getElementById("popupContainer-s6").style.display = "none";
}

// step7
function showStep7() {
  document.getElementById("overlay-s7").style.display = "block";
  document.getElementById("popupContainer-s7").style.display = "block";
}
function hide7() {
  document.getElementById("overlay-s7").style.display = "none";
  document.getElementById("popupContainer-s7").style.display = "none";
}

//step8
function showStep8(){
  document.getElementById("overlay-s8").style.display = "block";
  document.getElementById("popupContainer-s8").style.display = "block";
}
function hide8() {
  document.getElementById("overlay-s8").style.display = "none";
  document.getElementById("popupContainer-s8").style.display = "none";
}

//step 9
function showStep9() {
  document.getElementById("overlay-s9").style.display = "block";
  document.getElementById("popupContainer-s9").style.display = "block";
}
function hide9() {
  document.getElementById("overlay-s9").style.display = "none";
  document.getElementById("popupContainer-s9").style.display = "none";
}

//step 10
function showStep10() {
  document.getElementById("overlay-s10").style.display = "block";
  document.getElementById("popupContainer-s10").style.display = "block";
}
function hide10() {
  document.getElementById("overlay-s10").style.display = "none";
  document.getElementById("popupContainer-s10").style.display = "none";
}

//step 11
function showStep11() {
  document.getElementById("overlay-s11").style.display = "block";
  document.getElementById("popupContainer-s11").style.display = "block";
}
function hide11() {
  document.getElementById("overlay-s11").style.display = "none";
  document.getElementById("popupContainer-s11").style.display = "none";
}

//step 12
function showStep12() {
  document.getElementById("overlay-s12").style.display = "block";
  document.getElementById("popupContainer-s12").style.display = "block";
}
function hide12() {
  document.getElementById("overlay-s12").style.display = "none";
  document.getElementById("popupContainer-s12").style.display = "none";
}

//step 13
function showStep13() {
  document.getElementById("overlay-s13").style.display = "block";
  document.getElementById("popupContainer-s13").style.display = "block";
}
function hide13() {
  document.getElementById("overlay-s13").style.display = "none";
  document.getElementById("popupContainer-s13").style.display = "none";
}

//step 14
function showStep14() {
  document.getElementById("overlay-s14").style.display = "block";
  document.getElementById("popupContainer-s14").style.display = "block";
}
function hide14() {
  document.getElementById("overlay-s14").style.display = "none";
  document.getElementById("popupContainer-s14").style.display = "none";
}

//step 15
function showStep15(){
  document.getElementById("overlay-s15").style.display = "block";
  document.getElementById("popupContainer-s15").style.display = "block";
}
function hide15() {
  document.getElementById("overlay-s15").style.display = "none";
  document.getElementById("popupContainer-s15").style.display = "none";
}




   