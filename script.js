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

// Function to Switch from Login Page to Animation Page
function showAnimationPage(event) {
    event.preventDefault(); // Prevent form submission

    const loginPage = document.getElementById("loginPage");
    const animationPage = document.getElementById("animationPage");
    const body = document.getElementById("body");

    // Smooth fade-out of login and fade-in animation page
    loginPage.classList.add("fade-out");
    setTimeout(() => {
        loginPage.classList.add("hidden"); // Hide after fade-out
        animationPage.classList.remove("hidden"); // Show new page
        animationPage.classList.add("fade-in");

        // Change background color for animation page
        body.style.backgroundColor = "#0f172a"; // New background
    }, 800); // Match fade-out duration
}
