let btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", () => {
  let datoUsuario1: string = document.getElementById("datoUsuario.value");
  let datoContrasenia1: string = document.getElementById(
    "datoContrasenia.value"
  );
  let usuario: string = "Juan";
  let clave: string = "claveJuan";
  if (datoUsuario.value == usuario && datoContrasenia.value == clave) {
    console.log("acceso aprobado");
  } else {
    console.log("Acceso denegado");
  }
});
