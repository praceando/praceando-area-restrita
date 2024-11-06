if (!checkLoginStatus()) {
    location.href = '../index.html'
}

function logout() {
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.reload();
}

function checkLoginStatus() {
    const cookies = document.cookie.split('; ');
    const isLoggedIn = cookies.find(row => row.startsWith('isLoggedIn='));

    return isLoggedIn && isLoggedIn.split('=')[1] === 'true';
}