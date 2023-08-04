class Producto {
    constructor(
      id,
      title,
      description,
      category,
      price,
      image,
      favorito = false
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.price = price;
      this.image = image;
      this.favorito = favorito;
    }
  }
  
  //BOTON LOGIN
  
  let btnLogin = document.querySelector("#btn-login");

  // Obtenemos el usuario del localStorage
  let usuario = JSON.parse(localStorage.getItem("usser")) || null;
  
  // Cambiar configuración del botón
  if (btnLogin) {
    if (usuario) {
      btnLogin.innerText = "Cerrar sesión"; // Cambié "usuario" a "Cerrar sesión" ya que se refiere a cerrar sesión.
    } else {
      btnLogin.innerText = "Inicio de sesión";
    }
    btnLogin.addEventListener("click", sesion);
  }
  
  // Función de inicio y cierre de sesión
  function sesion() {
    if (usuario) {
      // Si está logueado, cerramos sesión
      localStorage.removeItem("usser");
      location.replace("/index.html");
    } else {
      // Si no está logueado, redirigimos al inicio de sesión
      location.replace("/pages/premain.html");
    }
  }