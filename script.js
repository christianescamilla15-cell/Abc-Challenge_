// Colores permitidos
const colors = ["green", "blue", "red"];

// Seleccionar todos los h5
const headings = document.querySelectorAll("h5");

// Agregar evento de clic
headings.forEach(function(h5){

h5.addEventListener("click", function(){

// elegir color aleatorio
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// aplicar color
h5.style.color = randomColor;

});

});