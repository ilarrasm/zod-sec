class plantillaHTML{
    constructor(){
      this.name = [];
      this.id =[];
    }
    
    agregarElemento(name, id){
        this.name.push(name);
        this.id.push(id)
    }
  }
  







let menuDash = $("#menuDash");
// Mis consultas -- Mis productos -- mensajes
let menuBlog = $("#menuBlog");
// Entradas --- Categorias 
let menuCatalogo = $("#menuCatalogo");
// catalogo -> productos -> crear productos -> eliminar productos --> editar productos  
let menuUsers = $("#menuUsers");
// usuarios --> editar configuración de usuario --- ingresar equipo en su cuenta
let menuConsultas = $("#menuConsultas");
// registro de consultas --- editar consulta 
let menuAcount = $("#menuAcount");
// configuración de datos de contacto
let subMenu = $("#subMenu");





menuCatalogo.click(()=>{
    let plantilla = new plantillaHTML;
    plantilla.agregarElemento("productos", "productos")
    plantilla.agregarElemento("Crear productos", "productosNuevo")
    plantilla.agregarElemento("Eliminar productos", "productosDelete")
    plantilla.agregarElemento("editar productos", "productosEdit")
    subMenu.empty();
    subMenu.append(`<li><a id="${plantilla.id[0]}" href="#" class="border-b pb-2 mx-5">${plantilla.name[0]}</a></li>
    <li><a id="${plantilla.id[1]} " class="hover:border-b hover:pb-2 mx-5" href="#">${plantilla.name[1]}</a></li>
    <li><a id="${plantilla.id[2]} " class="hover:border-b hover:pb-2 mx-5" href="#">${plantilla.name[2]}</a></li>
    <li><a id="${plantilla.id[3]} " class="hover:border-b hover:pb-2 mx-5" href="#">${plantilla.name[3]}</a></li>`);
    $("#contantendor").empty()
});
menuBlog.click(()=>{
    let plantilla = new plantillaHTML;
    plantilla.agregarElemento("Entradas", "menuBlogEntradas")
    plantilla.agregarElemento("Categorias", "menuBlogCategorias")
    subMenu.empty();
    subMenu.append(`
    <li><a id="${plantilla.id[0]}" href="#" class="border-b pb-2 mx-5">${plantilla.name[0]}</a></li>
    <li><a id="${plantilla.id[1]} " class="hover:border-b hover:pb-2 mx-5" href="#">${plantilla.name[1]}</a></li>
    `);
    $("#contantendor").empty()
});
menuUsers.click(()=>{
    let plantilla = new plantillaHTML;
    plantilla.agregarElemento("Usuarios", "menuUsersPanel")
    plantilla.agregarElemento("configuración Usuarios", "menuUsersConf")
    subMenu.empty();
    subMenu.append(`
    <li><a id="${plantilla.id[0]}" href="#" class="border-b pb-2 mx-5">${plantilla.name[0]}</a></li>
    <li><a id="${plantilla.id[1]} " class="hover:border-b hover:pb-2 mx-5" href="#">${plantilla.name[1]}</a></li>
    `);
    $("#contantendor").empty()
});
menuConsultas.click(()=>{
    let plantilla = new plantillaHTML;
    plantilla.agregarElemento("Consultas", "menuConsultasPanel")
    plantilla.agregarElemento("Editar consulta", "menuConsultaEdit")
    subMenu.empty();
    subMenu.append(`
    <li><a id="${plantilla.id[0]}" href="#" class="border-b pb-2 mx-5">${plantilla.name[0]}</a></li>
    <li><a id="${plantilla.id[1]} " class="hover:border-b hover:pb-2 mx-5" href="#">${plantilla.name[1]}</a></li>
    `);
    $("#contantendor").empty()
});
menuAcount.click(()=>{
    let plantilla = new plantillaHTML;
    plantilla.agregarElemento("Datos de contacto", "menuAcountDat")
    subMenu.empty();
    subMenu.append(`
    <li><a id="${plantilla.id[0]}" href="#" class="border-b pb-2 mx-5">${plantilla.name[0]}</a></li>
    `);
    $("#contantendor").empty()
});

// inputs
let spans = document.querySelectorAll("#userPanel .span")
let inputs = document.querySelectorAll("#userPanel input, select")
let toggleBotons = document.querySelectorAll("#userPanel .fa-pen-to-square")
toggleBotons.forEach((toggleBoton, index)=>{
  toggleBoton.addEventListener("click", (event)=>{
    event.preventDefault()
    inputs[index].classList.toggle("hidden")
    spans[index].classList.toggle("hidden")
  })
} )

// a
let userBoton = document.querySelector(".userBoton");
let userMenu = document.querySelector(".userMenu");
userBoton.addEventListener("click", ()=>{
  userMenu.classList.toggle("hidden");
  console.log("ja")
})
console.log(userBoton)