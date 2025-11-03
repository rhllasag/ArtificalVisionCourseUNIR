// Date handler script
// Sets the current date in Spanish format
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('es-ES');
    }
});