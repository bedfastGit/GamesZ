function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Verifica las credenciales
    if (username === "user" && password === "user") {
      // Credenciales correctas
      alert("Inicio de sesión exitoso"); // le dije que lo quitara, SoyLejo_360
      window.open("control.html")


    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      alert("Usuario o contraseña incorrectos");
    }
  }
  
  function validarFormulario() {

    var correoInput = document.getElementById("correo");
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!correoRegex.test(correoInput.value)) {
        alert("Ingrese un correo electrónico válido");
        return false;
    } else {
    return true;
    }
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

  if (miBoton != null) { miBoton.addEventListener('mouseover', () => {
    mouseEncima = true;
  });
}

  if (miBoton != null){miBoton.addEventListener('mouseout', () => {
    mouseEncima = false;
  });
  }
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

  function openFileInput() {
    document.getElementById('fileInput').click();
  }

  function changeAvatar(input) {
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const avatarImg = document.querySelector('.user-info img');
        avatarImg.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  function changeUsername() {
    const newUsername = document.getElementById('newUsername').value;
    if (newUsername.trim() !== "") {
      document.querySelector('.user-details h2').textContent = newUsername;
    }
  }