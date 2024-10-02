// Mock utilisateurs
let users = [
    { id: 1, username: "JohnDoe", email: "john@example.com", isAdmin: false },
    { id: 2, username: "JaneSmith", email: "jane@example.com", isAdmin: true }
];

// Gestion de l'inscription
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = { id: users.length + 1, username, email, isAdmin: false };
    users.push(newUser);

    alert('Inscription réussie !');
    window.location.href = 'profile.html';
});

// Exemple de récupération de posts pour la page d'accueil
const posts = [
    { id: 1, user: 'JohnDoe', content: 'Mon premier post sur Quayno', likes: 5 },
    { id: 2, user: 'JaneSmith', content: 'Ceci est une autre publication !', likes: 10 }
];

// Charge les posts
function loadPosts() {
    const postContainer = document.getElementById('post-container');
    if (postContainer) {
        postContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-card');
            postElement.innerHTML = `
                <h3>${post.user}</h3>
                <p>${post.content}</p>
                <span>❤️ ${post.likes} likes</span>
                <button onclick="deletePost(${post.id})">Supprimer</button>
                <button onclick="editPost(${post.id})">Modifier</button>
            `;
            postContainer.appendChild(postElement);
        });
    }
}

// Fonction pour supprimer un post
function deletePost(postId) {
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        loadPosts();
    }
}

// Fonction pour modifier un post
function editPost(postId) {
    const post = posts.find(post => post.id === postId);
    const newContent = prompt('Modifier votre post:', post.content);
    if (newContent) {
        post.content = newContent;
        loadPosts();
    }
}

// Charger les posts au chargement de la page
document.addEventListener('DOMContentLoaded', loadPosts);
