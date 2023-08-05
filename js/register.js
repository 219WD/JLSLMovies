class Usuario {
  constructor(username, password, email, cargo = false) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

// Escuchar el evento submit del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const newUsername = document.getElementById('ussername').value;
  const newPassword = document.getElementById('password').value;
  const newEmail = document.getElementById('email').value;

  // Obtener los usuarios registrados desde LocalStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verificar si el usuario ya existe
  if (users.some(u => u.username === newUsername)) {
    alert('Este usuario ya existe. Intenta con otro nombre de usuario.');
    return;
  }

  // Crear una instancia de Usuario con los datos del nuevo usuario
  const newUser = new Usuario(newUsername, newPassword, newEmail);

  // Agregar el nuevo usuario a la lista
  users.push(newUser);

  // Guardar la lista actualizada en LocalStorage
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registro exitoso. ¡Ahora puedes iniciar sesión con tu nueva cuenta!');

document.getElementById('ussername').value = "";
document.getElementById('password').value = "";
document.getElementById('email').value = "";
});