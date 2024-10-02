// Mock data for popular posts
const popularPosts = [
    { user: "John Doe", content: "Quayno is awesome!", likes: 120 },
    { user: "Jane Smith", content: "I love using Quayno to connect with friends.", likes: 95 },
];

// Load popular posts
document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById('post-container');
    if (postContainer) {
        popularPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('post-card');
            postCard.innerHTML = `
                <h3>${post.user}</h3>
                <p>${post.content}</p>
                <span>❤️ ${post.likes} likes</span>
            `;
            postContainer.appendChild(postCard);
        });
    }
});
