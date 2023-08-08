// capturar elementos del formulario apra pasarlo como parametro 
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
  
    enviarCorreo(correo, mensaje, nombre);
  }
    
        
  
  
  function enviarCorreo(correo, mensaje, nombre) {
      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "lfurmanski408@gmail.com",
          Password : "12A95E1A3AABF42A1DDF38C15907B8E687EF",
          To : correo,
          From : "lfurmanski408@gmail.com",
          Subject : "Mensaje de :" + nombre,  
          Body : mensaje,
      }).then(
        message => alert(message)
      );
  }
  