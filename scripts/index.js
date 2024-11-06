const loginSidebar = document.getElementById('loginSidebar');
const isLoggedIn = localStorage.getItem('isLoggedIn');
const overlay = document.getElementById('overlay');
const wecomeMessage = document.querySelector('.welcome-message h1')

if (!isLoggedIn) {
    loginSidebar.style.display = 'flex';
    overlay.style.display = 'block';
    wecomeMessage.style.display = 'none';
} else {
    loginSidebar.style.display = 'none';
    overlay.style.display = 'none';
    wecomeMessage.style.display = 'block';
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
        // Produção: https://praceando-api-pg.onrender.com/api/usuario/login
        // Desenvolvimento: http://localhost:8083/api/usuario/login
        const response = await fetch('https://praceando-api-pg.onrender.com/api/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dsEmail: email, dsSenha: senha })
        });

        loadingMessage.style.display = 'none';

        if (response.ok) {
            localStorage.setItem('isLoggedIn', 'true');
            
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
    localStorage.removeItem('isLoggedIn'); 
    window.location.reload();
}