
// Escuchar el evento submit del formulario de inicio de sesión
document.getElementById('formLogIn').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('emailLog').value;
  const password = document.getElementById('passwordLog').value;

  // Obtener los usuarios registrados desde LocalStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Buscar el usuario en la lista
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('¡Inicio de sesión exitoso!');
    location.replace("/index.html")
  } else {
    alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
  }
});