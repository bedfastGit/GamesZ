function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    // Verifica las credenciales (esto es solo un ejemplo, no es seguro)
    if (username === "usuario" && password === "contraseña") {
      // Credenciales correctas, redirige o realiza otras acciones necesarias
      alert("Inicio de sesión exitoso");
    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
  }
  