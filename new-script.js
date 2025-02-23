const textElement = document.getElementById("changingText");
const words = ["I LOVE YOU", "I ❤️ YOU", "I ❤️ U", "❤️"]; // Correct order
let index = 0;

function changeText() {
    textElement.classList.add("transition-out"); // Start shrinking

    setTimeout(() => {
        index = (index + 1) % words.length;
        textElement.innerText = words[index];
        textElement.classList.remove("transition-out");
        textElement.classList.add("transition-in"); // Expand smoothly
    }, 500); // Mid-animation point

    setTimeout(() => {
        textElement.classList.remove("transition-in"); // Reset state
    }, 1000);
}

setInterval(changeText, 2000);
