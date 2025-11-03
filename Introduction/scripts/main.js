// Main presentation script
// Initializes Reveal.js and handles main presentation functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize reveal.js
    Reveal.initialize({
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
        backgroundTransition: 'fade',

        // Plugins
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });

    // Add some keyboard shortcuts
    document.addEventListener('keydown', function (event) {
        // Press 'R' to reload
        if (event.key === 'r' || event.key === 'R') {
            location.reload();
        }
    });

    // Add slide numbers
    Reveal.configure({
        slideNumber: 'c/t',
        showSlideNumber: 'all'
    });
});