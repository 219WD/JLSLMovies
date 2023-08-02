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
  
  //Capturar el boton
  let btnLogin = document.querySelector("#btn-login");
  
  //Obtenemos el usuario
  const data = JSON.parse(localStorage.getItem("usuarios")) || [];
  
  //Cambiar configuracion del boton
  if (btnLogin) {
    if (usuario) {
      btnLogin.innerText = usuario;
    } else {
      btnLogin.innerText = "Inicio de sesión";
    }
    document.querySelector("#btn-login").addEventListener("click", sesion);
  }
  
  //Funcion de inicio de sesion
  function sesion() {
    if (usuario) {
      //Si esta logueado
      localStorage.removeItem("usser");
      btnLogin.innerText = "Inicio de sesión";
      location.replace("http://localhost:5500/index.html");
    } else {
      //No esta logueado
      location.replace("http://127.0.0.1:5502/pages/crud/pages/login.html");
    }
  }
  
  //Funcion marcarFavorito
  
  const marcarFavorito = (id) => {
    //Obtenemos el index
    let index = productos.findIndex((item) => {
      return item.id == id;
    });
  
    //Cambiar el estado
    productos[index].favorito = !productos[index].favorito;
  
    //Actualizo localS
    localStorage.setItem("productos", JSON.stringify(productos));
    //Listar los productos
    listarProductos();
  };
  