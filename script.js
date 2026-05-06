// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (name === "") {
        formMsg.innerText = "Name is required";
        formMsg.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        formMsg.innerText = "Enter valid email";
        formMsg.style.color = "red";
        return;
    }

    if (message.length < 10) {
        formMsg.innerText = "Message must be at least 10 characters";
        formMsg.style.color = "red";
        return;
    }

    formMsg.innerText = "Message sent successfully!";
    formMsg.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
});


// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

// Load saved mode
window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};


// Show/Hide About Section (Extra Feature)
function toggleAbout() {
    const about = document.getElementById("about");
    about.style.display = (about.style.display === "none") ? "block" : "none";
}