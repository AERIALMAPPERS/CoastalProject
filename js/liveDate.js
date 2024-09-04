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