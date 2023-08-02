//CLASE - CONSTRUCTOR
class Usuario {
    constructor(id, usser, email, password) {
        this.id = id;
        this.usser = usser;
      this.email = email;
      this.password = password;
    }
  }

  //RECIBIR DESDE LOCALSTORAGE
  const data = JSON.parse(localStorage.getItem("usuarios")) || [];
  
  
  //Funcion para agregar usuario nuevo
  
  const agregarUsuario = (event) => {
    //1-Detener el submit
    event.preventDefault();
  
    //2-Limpiar contenedor
    contenedorCard.innerHTML = "";
  
    // // 3-Crear id (a partir de usuarios existentes)
    // let id = data.at(-1).id + 1;
    //3-crear id (sin usuarios preexistentes)
    let id = new Date().getTime();
  
    //4-Capturar los datos de los input
    let first_name = document.querySelector("#nombre").value;
    let last_name = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let avatar = document.querySelector("#img").value;
  
    //5-Crear la clase usuario
    let usuario = new Usuario(id, first_name, last_name, email, avatar);
  
    //6-Agregar al arreglo el nuevo usuario
    data.push(usuario);
  
    //!Agregar al localStorage
    localStorage.setItem("usuarios", JSON.stringify(data));
  
    //7-Limpiar el form
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#img").value = "";
  
    //8-Imprimir
    listaUsuarios();
  };
  
  listaUsuarios();
  