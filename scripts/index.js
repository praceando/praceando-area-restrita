const loginSidebar = document.getElementById('loginSidebar');
const overlay = document.getElementById('overlay');
const wecomeMessage = document.querySelector('.welcome-message h1')

if (!checkLoginStatus()) {
    loginSidebar.style.display = 'flex';
    overlay.style.display = 'block';
    wecomeMessage.display = 'none';
} else {
    loginSidebar.style.display = 'none';
    overlay.style.display = 'none';
    wecomeMessage.display = 'inline';
}

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('errorMessage');
    const loadingMessage = document.getElementById('loadingMessage');
    
    errorMessage.style.display = 'none';
    loadingMessage.style.display = 'block';

    try {
        // https://praceando-api-pg.onrender.com/api/usuario/login
        const response = await fetch('http://localhost:8083/api/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dsEmail: email, dsSenha: senha })
        });

        loadingMessage.style.display = 'none';

        if (response.ok) {
            document.cookie = "isLoggedIn=true; path=/; secure; samesite=strict";
            window.location.reload();
        } else {
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        console.error("Error during login:", error);
        loadingMessage.style.display = 'none';
    }
});

function logout() {
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.reload();
}

function checkLoginStatus() {
    const cookies = document.cookie.split('; ');
    const isLoggedIn = cookies.find(row => row.startsWith('isLoggedIn='));

    return isLoggedIn && isLoggedIn.split('=')[1] === 'true';
}