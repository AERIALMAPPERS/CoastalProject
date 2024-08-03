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