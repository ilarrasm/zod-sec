
;
//
//MODALL


// Get the <span> element that closes the modal
let listaDeImagenes = document.querySelectorAll(".main__articulo__contenido__img")
let botonesImg = document.querySelectorAll(".botonImg")
botonesImg.forEach((boton, index)=>{
  boton.addEventListener("click", (event)=>{
    event.preventDefault();
    listaDeImagenes.forEach( element => element.classList.remove("show"))
    listaDeImagenes[index].classList.toggle("show")
  });
});
// al apretar el boton de mi la imagen en vista pueda mostrarse en el modal