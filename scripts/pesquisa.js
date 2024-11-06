const isLoggedIn = localStorage.getItem('isLoggedIn');

if (!isLoggedIn) {
    location.href = '../index.html'
}

function logout() {
    localStorage.removeItem('isLoggedIn'); 
    window.location.reload();
}