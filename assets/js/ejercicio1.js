function toggleBorder() {
  var nombreClase = "bordeRojo";
  var imagen = document.getElementById("imgPerro");
  var contieneClase = imagen.classList.contains(nombreClase);

  if (contieneClase) {
    imagen.classList = "";
  } else {
    imagen.classList += nombreClase;
  }
}
