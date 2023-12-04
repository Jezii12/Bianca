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
            // Remove existing header and tab-bar
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            const contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML = '';

            // Append only the content (excluding header and tab-bar) to the content container
            const mainContent = tempDiv.querySelector('#content-container');
            if (mainContent) {
                contentContainer.appendChild(mainContent);
            }
        })
        .catch(error => console.error('Error loading content:', error));
}
