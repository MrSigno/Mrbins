document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Formulario enviado con éxito');
        // Aquí puedes agregar lógica para enviar los datos al servidor
    } else {
        alert('Por favor, completa todos los campos');
    }
});
