document.addEventListener("DOMContentLoaded", () => {
    // Handle video upload and post creation
    const postForm = document.getElementById('post-form');
    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const postContent = document.getElementById('post-content').value;
            const videoUpload = document.getElementById('video-upload').files[0];

            if (videoUpload && videoUpload.size / 1024 / 1024 > 10) {
                alert("Video must be under 10MB!");
                return;
            }

            // Logic to handle the video upload and post content (mocked for now)
            alert("Post submitted successfully with video!");
        });
    }

    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = document.getElementById('search-bar').value;
            // Perform search (mocked for now)
            alert(`Searching for: ${query}`);
        });
    }
});
