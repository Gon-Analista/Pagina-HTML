const fondo = document.getElementById("fondo");

const btn = document.getElementById("boton-probar");

const cambioFondo = () =>{
    fondo.classList.toggle("fondo-color-2");
};



btn.addEventListener("click", cambioFondo)