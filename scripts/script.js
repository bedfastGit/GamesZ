function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    // Verifica las credenciales (esto es solo un ejemplo, no es seguro)
    if (username === "user" && password === "user") {
      // Credenciales correctas, redirige o realiza otras acciones necesarias
      alert("Inicio de sesión exitoso");
    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
  }
  
  function validarFormulario() {

    var correoInput = document.getElementById("correo");
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!correoRegex.test(correoInput.value)) {
        alert("Ingrese un correo electrónico válido");
        return false;
    }

    return true;
  }

  function mostrarOcultarContrasena() {
    var contrasenaInput = document.getElementById("contrasena");

    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
    } else {
        contrasenaInput.type = "password";
    }
}

function atrasSatanas(mostrar, esconder) {

  let myesconder = getElementById(esconder);
  let mymostrar = getElementById(mostrar);

  myesconder.style.display = "none";
  mymostrar.style.display = "flex";

  alert ("h");
}