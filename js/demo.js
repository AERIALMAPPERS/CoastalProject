function displayImageAndHighlight(imageUrl, area) {
    displayImage(imageUrl);
    highlightArea(area);
}

function displayImage(imageUrl) {
    var displayedImage = document.getElementById("displayedImage");
    displayedImage.src = imageUrl;
    displayedImage.style.display = "block";
}

function highlightArea(area) {
    var displayedImage = document.getElementById("displayedImage");
    var imageWidth = displayedImage.width;
    var imageHeight = displayedImage.height;

    var canvas = document.createElement("canvas");
    canvas.width = imageWidth;
    canvas.height = imageHeight;
    var ctx = canvas.getContext("2d");

    displayedImage.onload = function() {
        ctx.drawImage(displayedImage, 0, 0, imageWidth, imageHeight);
        if (area === 'district1') {
            // Define coordinates for district 1 boundary
            // Example coordinates: x1, y1, x2, y2, ...
            var coords = [100, 100, 200, 200, 300, 150]; // Update with actual coordinates
            drawPolygon(ctx, coords);
        } else if (area === 'district2') {
            // Define coordinates for district 2 boundary
            var coords = [150, 250, 250, 350, 200, 400]; // Update with actual coordinates
            drawPolygon(ctx, coords);
        }
        // Add more conditions for other districts if needed
        displayedImage.src = canvas.toDataURL();
    };
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("regionButton").addEventListener("click", function() {
        displayRegions();
    });
});

/////////////

function displayImage(imageUrl) {
    var displayedImage = document.getElementById("displayedImage");
    displayedImage.src = imageUrl;
}



function displayImage(event, imageUrl) {
    event.preventDefault(); // Prevent the default action of anchor tag (page refresh)

    var displayedImage = document.getElementById("displayedImage");
    displayedImage.src = imageUrl;
}




