const loginSidebar = document.getElementById('loginSidebar');
const isLoggedIn = localStorage.getItem('isLoggedIn');
const overlay = document.getElementById('overlay');

if (!isLoggedIn) {
    loginSidebar.style.display = 'flex';
    overlay.style.display = 'block';
} else {
    overlay.style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Colocar a validação de login KKKKKKKKK
    localStorage.setItem('isLoggedIn', 'true'); 
    loginSidebar.style.display = 'none';
    overlay.style.display = 'none';
    window.location.reload();
});


function logout() {
    localStorage.removeItem('isLoggedIn'); 
    window.location.reload();
}