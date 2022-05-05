//mostrar categorias
// crear categorias nombre, status, array  
// 
const categorias = [];
let category = class{
    constructor(nombre, status, array ){
        this.nombre = nombre,
        this.status  = status,
        this.array = array;  
    }
     validarJerarquia(){
        if(!this.array === [] && !this.status){
            // si this.array no es un array
            // this.status es false
            console.log("solamente es una categoria")
            this.status = false
        }else{
            //si this.arry es un array
            console.log("es una categoria principal");
            this.status = true
        }
    }
    agregar(){
        this.array = []
        let guardar = this.array
        let checkValue = document.querySelectorAll("input[name='categorias']")
        // Se le va a pedir información al checkbox
        let element 
        checkValue.forEach( (valor, index)=>{
            element = valor
            console.log(element)  
            if(element.checked && element.value){
                //VALIDAMOS QUE ELEMENT ESTÉ CHECKEADO Y CON UN VALUE   
                let nombre = element.value
                let nuevaCategoria = new category(nombre, false)
                categorias.push(nuevaCategoria)
                let lastItem = categorias[categorias.length-1]
                this.array.push(lastItem)
            }                

                //categorias.push(nuevaCategoria)
                //console.log(categorias);
        })
    }
    quitar(e){
        /// 
        this.array.splice(e)
    }
    
};
let btnEnviar = document.querySelector("#enviarNombre");
let nombre = document.querySelector("input[name='nombre']");
let categoriaMonitor = document.querySelector("#categoriaMonitor");
let box = document.querySelector("#box")
btnEnviar.addEventListener("click", function(){
    let objName = new category(nombre.value)
    categorias.push(objName)
    box.style.display = "flex";

});
let btn = document.querySelector("#enviar")
btn.addEventListener("click", function(){
    let cat = categorias[0]
    cat.agregar();
    cat.validarJerarquia();
    categoriaMonitor.innerHTML = `<h3>se ha generado con exito</h3>`;
    categoriaMonitor.innerHTML += ` <p>Se creo un grupos de categorias con el nombre: ${cat.nombre}</p>
                                    <h2>SubGrupo</h2>
                                    <ul class="elementos"></ul>`;
    let con = document.querySelector(".elementos")
    cat.array.forEach(element =>{
        con.innerHTML += `<li>${element.nombre}</li>`
    } )
    

});









