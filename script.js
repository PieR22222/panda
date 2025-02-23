const textElement = document.getElementById("changingText");
const words = ["I LOVE YOU", "I ❤️ YOU", "I ❤️ U", "❤️"];
let index = 0;

function changeText() {
    textElement.classList.add("transition-out");

    setTimeout(() => {
        index = (index + 1) % words.length;
        textElement.innerText = words[index];
        textElement.classList.remove("transition-out");
        textElement.classList.add("transition-in");
    }, 300);

    setTimeout(() => {
        textElement.classList.remove("transition-in");
    }, 600);
}

setInterval(changeText, 1500);

// Function to Switch from Login Page to Animation Page
function showAnimationPage(event) {
    event.preventDefault(); // Prevent form submission

    document.getElementById("loginPage").classList.add("hidden"); // Hide login
    document.getElementById("animationPage").classList.remove("hidden"); // Show animation
}
