document.addEventListener("DOMContentLoaded", function () {
    // Load default content (e.g., 'about.html') on page load
    loadContent('about.html');

    // Add event listeners to tab links
    document.querySelectorAll('.tab-bar a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            loadContent(page);
        });
    });
});

function loadContent(page) {
    // Fetch and load the content of the selected page
    fetch(page)
        .then(response => response.text())
        .then(html => {
            // Extract content from fetched HTML
            const content = extractContent(html);

            // Update content container with extracted content
            document.getElementById('content-container').innerHTML = content;

            // Update background and heading styling
            applyCommonStyles();
        })
        .catch(error => console.error('Error loading content:', error));
}

function extractContent(html) {
    // Use a temporary div to parse the fetched HTML and extract content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const mainContent = tempDiv.querySelector('#content-container');

    return mainContent ? mainContent.innerHTML : '';
}

function applyCommonStyles() {
    // Apply common styles, including background, to the body
    const body = document.body;
    body.style.backgroundImage = 'url("/bg.jpg")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.color = '#000';
}
