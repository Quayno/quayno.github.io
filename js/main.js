document.addEventListener("DOMContentLoaded", () => {
    // Login logic
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "admin" && password === "password") {
            window.location.href = "admin.html";
        } else {
            alert("Incorrect credentials!");
        }
    });

    // Populate profile page
    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) {
        usernameDisplay.textContent = 'User123'; // Replace with actual user data
    }

    // Admin page logic for moderating posts
    const adminPostContainer = document.getElementById('admin-post-container');
    if (adminPostContainer) {
        adminPostContainer.innerHTML = "<p>No posts to moderate</p>";
    }
});
