document.getElementById('loginForm').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Todos los campos son obligatorios');
        event.preventDefault();
    }
});

