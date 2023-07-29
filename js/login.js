//Perfil de ejemplo
const admin = {
    correo: "admin@admin.com",
    password: "12345678",
  };
  
  //Funcion logIn
  
  const logIn = (event) => {
    event.preventDefault();
  
    //Obtengo los valores
    let correo = document.querySelector("#emailLog").value;
    let password = document.querySelector("#passwordLog").value;
  
    //Validar los valores
    //   if(correo===admin.correo && password===admin.password)
    if (correo === admin.correo) {
      if (password === admin.password) {
        //Enviamos al localS
        localStorage.setItem("user", JSON.stringify(correo));
  
        //Ir a adminitracion
        location.replace("/index.html");
      }
    } else {
      alert("El correo o la contraseña es incorrecta!");
    }
  };
  
  //Escuchadores de eventos
  document.getElementById("formLogIn").addEventListener("submit", logIn);
  


//-------------------------------------------------------------------------------------------
//Register

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

  
    //3-crear id (sin usuarios preexistentes)
    let id = new Date().getTime();
  
    //4-Capturar los datos de los input
    let usser = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
  
    //5-Crear la clase usuario
    let usuario = new Usuario(id, usser, email, password);
  
    //6-Agregar al arreglo el nuevo usuario
    data.push(usuario);
  
    //!Agregar al localStorage
    localStorage.setItem("usuarios", JSON.stringify(data));
  
    //7-Limpiar el form
    document.querySelector("#usser").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";

  
  };
  