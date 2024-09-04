// for zoom in zoom out function

var originalFontSize;

window.onload = function() {
    // Store the original font size when the page loads
    originalFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
};

function zoomIn() {
    var currentFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    document.body.style.fontSize = (currentFontSize + 1) + 'px';
}

function zoomOut() {
    var currentFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    document.body.style.fontSize = (currentFontSize - 1) + 'px';
}

function resetZoom() {
    // Set the font size to the original size
    document.body.style.fontSize = originalFontSize + 'px';
}

// end zoom in 