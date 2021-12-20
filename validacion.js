document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener("submit", validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  let nombre = document.getElementById("form4Example1").value;
  if (nombre.length == 0) {
    alert("Debes escribir un nombre");
    return;
  }
  let email = document.getElementById("form4Example2").value;
  if (email.length == 0) {
    alert("Debes escribir un email");
    return;
  }
  /* Bootstrap hace una validación por su parte, 
  esta validación complementa la misma */
  if (!emailValido(email)) {
    alert("Por favor, escribe un email válido");
    return;
  }
  let mensaje = document.getElementById("form4Example3").value;
  if (mensaje.length == 0) {
    alert("Debes escribir un mensaje");
    return;
  }
  this.submit();
};

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}