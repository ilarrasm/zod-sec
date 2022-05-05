//dash aside
//user
let btnUser = document.getElementById("botonUser");
let contenedor = document.getElementById("userDate");
let contenedorCat = document.getElementById("categorias");
//cat
let btnCat = document.getElementById("btnCat");
/// aside
let asideBtn = document.getElementById("asideBtn");
const asideContainer = document.getElementById("asideContainer");
let asideOpen = document.querySelector(".aside-open")
///plus
let plus = document.querySelectorAll(".plus");
//modal
let modal = document.querySelector(".modal");
// 


function togglear(btn, contain){
  // validar
  if(btn && contain){
    console.log(btn, contain)
    let modalAside = document.querySelector(".modalAside");
    let modal = document.querySelectorAll(".modal");
    function TogleOk(){
    console.log(btn, contain)
    if(btn === document.getElementById("asideBtn")){
      dashNav = document.querySelector(".dash-nav");
      dashNav.classList.add("aside-open")
      modalAside.classList.add("show")
      modalAside.addEventListener("click", ()=>{
        contain.style.display = "none"
      })
      contain.style.display = "flex"
    }else{
          modal.forEach(element => {
            element.addEventListener("click", ()=>{
              contain.classList.remove("show");
            })
          })
        contain.classList.toggle("show")
      }
    }
    btn.addEventListener("click", TogleOk)
  }
}


togglear(btnUser, contenedor)
togglear(btnCat, contenedorCat)
togglear(asideBtn, asideContainer)
togglear()
///////menu hamburguesa
function responsiveMobile(){
  let x = document.querySelector(".nav");
  let btn = document.getElementById("hamburguer")  
  if (window.innerWidth <  800) { // If media query matches
    function hamburguesa() {
      if (x.style.display === "flex") {
          x.style.display = "none";
      }else {
        x.style.display = "flex";
      }
    }
    btn.addEventListener("click", hamburguesa);
  }
  }
responsiveMobile()
/////////////////////////////
/////////////carrusel
function carrouselStart(){
  const carouselSlide = document.querySelector('.carrousel');
  const carouselImages = document.querySelectorAll('.carrousel__container');
  ///bbuttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  //counter
  const size = carouselImages[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-size*1}px)`;
  let inMove = false;
  let lastMove;

  function afterSlide(action){

      if(action == 1){

          carouselSlide.append(carouselSlide.children[0]);
      }else if(action == -1){
          
          carouselSlide.insertBefore(carouselSlide.children[carouselSlide.children.length-1],carouselSlide.children[0]);
      }
      carouselSlide.style.transition ="none";
      carouselSlide.style.transform = 'translateX(' + (-size) + 'px)';
      setTimeout(autoSlide, 7000);
      inMove = false;
  }
  function autoSlide(){

      if(Date.now()-lastMove>=7700)nextSlide();
      
  }
  //bButtons listener
  function nextSlide(){
      
      inMove = true;
      carouselSlide.style.transition ="transform 0.8s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size*2) + 'px)';
      setTimeout(()=>{afterSlide(1)}, 800);
      lastMove = Date.now();
  }
  nextBtn.addEventListener('click', ()=>{
      
      if(!inMove){

          nextSlide()
      }
  });
  prevBtn.addEventListener('click', () => {
      
      if(!inMove){

          inMove = true;
          carouselSlide.style.transition ="transform 0.8s ease-in-out";
          carouselSlide.style.transform = 'translateX(' + 0 + 'px)';
          setTimeout(()=>{afterSlide(-1)}, 800);
          lastMove = Date.now();
      }
  });
  setTimeout(nextSlide, 4000);
}

  
document.addEventListener("DOMContentLoaded",()=>{
  if(document.querySelector('.carrousel')){
    carrouselStart();
  }
});
/////

let comun = document.querySelectorAll(".g")

for(let i = 0; i < 10; i++){
  console.log(i)
  let contenedor = document.getElementById(`subCategorias${i}`)
  let boton = document.getElementById(`categoria${i}`)
  console.log(boton)
  boton.addEventListener("click", ()=>{
    console.log(boton)
    comun.forEach(element =>{
      element.classList.add("d-hidden")
    })
    contenedor.classList.toggle("d-hidden");
   
  })

}

// SISTEMA DE INPUT



