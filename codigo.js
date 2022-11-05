//array
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//contenido
meses.forEach((mes) => {
  var column = document.createElement("div");
  column.classList.add("column", "col-4");

  var h3 = document.createElement("h3");
  h3.classList.add("bg-primary", "cuadro");
  h3.textContent = mes;

  column.appendChild(h3);
  document.getElementById("contenido").appendChild(column); //apendChild toma el contenido y los coloca en las columnas
});
//funcion agregar cambio
function agregar() {
  const cambios = meses.map(function agregar(ene) {
    return ene + " 2022 ";
  });
  //muestra por pantalla el cambio a traves del button
  document.getElementById("cambio").innerHTML = cambios;
}
