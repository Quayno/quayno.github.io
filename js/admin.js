// Mock utilisateurs pour la modération
let users = [
    { id: 1, username: "JohnDoe", email: "john@example.com", isAdmin: false },
    { id: 2, username: "JaneSmith", email: "jane@example.com", isAdmin: true }
];

// Supprimer un utilisateur
function deleteUser(userId) {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        alert('Utilisateur supprimé.');
        loadUsers();
    }
}

// Charger les utilisateurs dans la page admin
function loadUsers() {
    const userContainer = document.getElementById('user-container');
    if (userContainer) {
        userContainer.innerHTML = '';
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user-card');
            userElement.innerHTML = `
                <h3>${user.username}</h3>
                <p>Email: ${user.email}</p>
                <button onclick="deleteUser(${user.id})">Supprimer l'utilisateur</button>
            `;
            userContainer.appendChild(userElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadUsers);
