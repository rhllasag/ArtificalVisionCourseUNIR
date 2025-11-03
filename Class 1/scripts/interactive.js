// Interactive elements script
// Handles color changing functionality and other interactive elements

// Custom JavaScript for interactivity
function changeColor() {
    const colors = ['#859900', '#dc322f', '#268bd2', '#d33682', '#cb4b16', '#b58900'];
    const colorBox = document.getElementById('colorBox');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
}