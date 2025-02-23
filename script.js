let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let loginBtn = document.querySelector("form button");

// Add smooth transitions
eyeL.style.transition = "0.3s ease-in-out";
eyeR.style.transition = "0.3s ease-in-out";
handL.style.transition = "0.3s ease-in-out";
handR.style.transition = "0.3s ease-in-out";

// Normal state
let normalEyeStyle = () => {
  eyeL.style.cssText = `left: 0.6em; top: 0.6em; transition: 0.3s ease-in-out;`;
  eyeR.style.cssText = `right: 0.6em; top: 0.6em; transition: 0.3s ease-in-out;`;
};

let normalHandStyle = () => {
  handL.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    left: 7.5em;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  `;
  handR.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  `;
};

// When clicking on username
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `left: 1.2em; top: 1.2em; transition: 0.3s ease-in-out;`;
  eyeR.style.cssText = `right: 1.2em; top: 1.2em; transition: 0.3s ease-in-out;`;
  normalHandStyle();
});

// When clicking on password
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
    height: 7em;
    top: 3.5em;
    left: 11em;
    transform: rotate(-155deg);
    transition: 0.3s ease-in-out;
  `;
  handR.style.cssText = `
    height: 7em;
    top: 3.5em;
    right: 11em;
    transform: rotate(155deg);
    transition: 0.3s ease-in-out;
  `;
  normalEyeStyle();
});

// Reset when clicking outside
document.addEventListener("click", (e) => {
  if (e.target !== usernameRef && e.target !== passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

// Login button click event → Redirect to new page
loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Add animation effect to button
  loginBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    loginBtn.style.transform = "scale(1)";
  }, 200);

  // Add slight delay before redirection for a smoother experience
  setTimeout(() => {
    window.location.href = "animated.html"; // Redirect to animated text page
  }, 500); // Redirect after 0.5 seconds
});
