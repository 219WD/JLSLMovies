//BOTON LOGIN
let btnLogin = document.querySelector("#btn-login");


// Obtenemos el usuario del localStorage
const user = JSON.parse(localStorage.getItem('users')) || [];

// Cambiar configuración del botón
if (btnLogin) {
  if (user.length > 0) {
    btnLogin.innerText = "Cerrar sesión";
  } else {
    btnLogin.innerText = "Inicio de sesión";
  }
  btnLogin.addEventListener("click", sesion);
}

// Función de inicio y cierre de sesión
function sesion() {
  const user = JSON.parse(localStorage.getItem('users')) || [];

  if (user.length > 0) {
    // Si está logueado, cerramos sesión
    localStorage.removeItem("users");
    location.replace("/index.html");
  } else {
    // Si no está logueado, redirigimos al inicio de sesión
    location.replace("/pages/premain.html");
  }
}