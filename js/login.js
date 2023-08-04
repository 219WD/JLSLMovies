 //Perfil de ejemplo
  const admin = {
    correo: "admin@admin.com",
    password: "JLSLMovies4",
    cargo: true,
  };
  
  //Funcion logIn
  
  const logIn = (event) => {
    event.preventDefault();
  
    //Obtengo los valores
    let correo = document.querySelector("#emailLog").value;
    let password = document.querySelector("#passwordLog").value;
  
    //Validar los valores
    //   if(correo===admin.correo && password===admin.password)
    if (correo === usuario.correo) {
      if (password === usuario.password) {
        //Enviamos al localS
        localStorage.setItem("usser", JSON.stringify(correo));
        location.replace("/index.html")
        
        // if(cargo){
        // //Ir a adminitracion
        // location.replace("/admin.html");
        // }

      }
    } else {
      alert("El correo o la contraseña es incorrecta!");
    }
  };
  
  //Escuchadores de eventos
  document.getElementById("formLogIn").addEventListener("submit", logIn);
  


//-------------------------------------------------------------------------------------------
