function capturarDatos() {
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  
    if (nombre.trim() === "") {
        nameError.textContent = "Por favor, ingresa tu nombre.";
        return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        emailError.textContent = "Por favor, ingresa una dirección de correo electrónico válida.";
        return;
    }
  
    if (mensaje.trim() === "") {
        messageError.textContent = "Por favor, ingresa un mensaje.";
        return;
    }
  
    var templateParams = {
      from_name: 'JLSLMovies',
      user_name: nombre,
      destinatario: correo,
      message: 'Gracias por comunicarte con nosotros, en breve responderemos.',
    };
  
    enviarMailUsuario(templateParams);


    var templateParamss = {
        from_name: nombre,
        user_name: 'JLSLMovies',
        message: mensaje,
      };

      enviarMailAdm(templateParamss);

  }
  
  //envia un mail al usuario confirmando que se recibio su mensaje 
  function enviarMailUsuario(params) {
      emailjs.send('service_g7qe2am', 'template_z1n3yw7', params)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         limpiarFormulario();
      }, function(error) {
         console.log('FAILED...', error);
      });  
  }
//envia mai al administrador del sitio, con el mensaje del usuario 
  function enviarMailAdm(paramss){
    emailjs.send('service_g7qe2am', 'template_q9emwf7', paramss)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    }); 
  }

  function limpiarFormulario() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
}
  