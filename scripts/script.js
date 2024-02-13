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

  //alert(mostrar + " espacio " + esconder)
  let myesconder = document.getElementById(esconder);
  let mymostrar = document.getElementById(mostrar);

  myesconder.style.display = "none";
  mymostrar.style.display = "flex";
}


const miBoton = document.getElementById('miBoton');
  let mouseEncima = false;

  function moverBoton() {
    const nuevoTop = Math.random() * (window.innerHeight - 50);
    const nuevoLeft = Math.random() * (window.innerWidth - 100);

    miBoton.style.top = `${Math.min(window.innerHeight - 50, Math.max(0, nuevoTop))}px`;
    miBoton.style.left = `${Math.min(window.innerWidth - 100, Math.max(0, nuevoLeft))}px`;
  }

  miBoton.addEventListener('mouseover', () => {
    mouseEncima = true;
  });

  miBoton.addEventListener('mouseout', () => {
    mouseEncima = false;
  });

  document.addEventListener('mousemove', (event) => {
    if (mouseEncima) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const distanciaX = mouseX - miBoton.offsetLeft - miBoton.offsetWidth / 2;
      const distanciaY = mouseY - miBoton.offsetTop - miBoton.offsetHeight / 2;

      const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

      if (distancia > 150) {  // Distancia mínima para no tocar el ratón directamente
        miBoton.style.top = `${Math.min(window.innerHeight - 50, Math.max(0, mouseY))}px`;
        miBoton.style.left = `${Math.min(window.innerWidth - 100, Math.max(0, mouseX))}px`;
      } else {
        moverBoton();
      }
    }
  });