document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-link');
    const boxes = document.querySelectorAll('.box1');
    const additionalInfoDiv = document.querySelector('.additional-info');
    const loadMoreBtn = document.getElementById('load-more');

    // Initially hide additional-info div
    additionalInfoDiv.style.display = 'none';

    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const filter = this.getAttribute('data-filter');

            // Hide all boxes and additional-info div
            boxes.forEach(box => {
                const category = box.getAttribute('data-category');
                box.style.display = 'none';

                // Hide all additional info divs
                const infoId = category + '-info-right';
                const selectedInfo = document.getElementById(infoId);
                if (selectedInfo) {
                    selectedInfo.style.display = 'none';
                }
            });

            // Display specific box based on the selected category
            if (filter === 'all') {
                boxes.forEach(box => {
                    box.style.display = 'block';
                });

                // Hide additional-info div when 'All' is selected
                additionalInfoDiv.style.display = 'none';
            } else {
                const selectedBoxes = document.querySelectorAll(`.box1[data-category="${filter}"]`);
                if (selectedBoxes.length > 0) {
                    selectedBoxes.forEach(selectedBox => {
                        selectedBox.style.display = 'block';

                        // Display specific additional info div based on the selected category
                        const infoId = filter + '-info-right';
                        const selectedInfo = document.getElementById(infoId);
                        if (selectedInfo) {
                            selectedInfo.style.display = 'block';
                        }
                    });

                    // Show additional-info div when a specific link is selected
                    additionalInfoDiv.style.display = 'block';
                }
            }
        });
    });

    loadMoreBtn.addEventListener('click', function () {
        // Handle "Load More" button click
        const selectedFilter = document.querySelector('.filter-link.active').getAttribute('data-filter');

        if (selectedFilter && selectedFilter !== 'all') {
            // Append additional information paragraph below the "Load More" button
            const additionalParagraph = document.createElement('p');
            additionalParagraph.textContent = 'Additional information for loaded content...';
            additionalInfoDiv.appendChild(additionalParagraph);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-hover');

    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            // Show the title as a tooltip
            const title = this.getAttribute('title');
            this.setAttribute('data-original-title', title);

            // Add the blur effect
            this.classList.add('image-blur');
        });

        image.addEventListener('mouseout', function () {
            // Remove the tooltip and blur effect
            this.removeAttribute('data-original-title');
            this.classList.remove('image-blur');
        });
    });
});

