class Usuario {
  constructor(id, usser, email, password, cargo = false) {
    this.id = id;
    this.usser = usser;
    this.email = email;
    this.password = password;
    this.cargo = cargo; // No es necesario usar `cargo = false` aquí, ya que si no se proporciona, su valor por defecto será `false`.
  }
}

//RECIBIR DESDE LOCALSTORAGE
const data = JSON.parse(localStorage.getItem("usuarios")) || [];

//Register

//Funcion para agregar usuario nuevo
const agregarUsuario = (event) => {
  //1-Detener el submit
  event.preventDefault();

  //3-Crear id (sin usuarios preexistentes)
  let id = new Date().getTime();

  //4-Capturar los datos de los inputs
  let usser = document.querySelector("#ussername").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  //5-Crear la clase usuario
  let usuario = new Usuario(id, usser, email, password);

  //6-Agregar al arreglo el nuevo usuario
  data.push(usuario);

  //Agregar al localStorage
  localStorage.setItem("usuarios", JSON.stringify(data));

  //7-Limpiar el formulario
  document.querySelector("#ussername").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
};