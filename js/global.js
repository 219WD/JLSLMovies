  //BOTON LOGIN
  
  let btnLogin = document.querySelector("#btn-login");

  // Obtenemos el usuario del localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Cambiar configuración del botón
  if (btnLogin) {
    if (users) {
      btnLogin.innerText = "Cerrar sesión"; 
    } else {
      btnLogin.innerText = "Inicio de sesión";
    }
    btnLogin.addEventListener("click", sesion);
  }
  
  // Función de inicio y cierre de sesión
  function sesion() {
    if (users) {
      // Si está logueado, cerramos sesión
      localStorage.removeItem("username");
      location.replace("/index.html");
    } else {
      // Si no está logueado, redirigimos al inicio de sesión
      location.replace("/pages/premain.html");
    }
  }