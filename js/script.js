class Instrumento{
    constructor(inst,cantidad){
        this.id=inst.id
        this.imagen=inst.imagen
        this.tipo=inst.tipo
        this.modelo=inst.modelo
        this.cuerdas=inst.cuerdas
        this.color=inst.color
        this.precio=inst.precio
        this.cantidad=cantidad
    }
    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}
//objetos para las cards, los objetos son estaticos, el unico cambio de posicion se lo doy mediante una grilla creada con css
const instrumentos = [
    {id:0,imagen:"img/img-1.png",tipo:"GUITARRA",modelo:"McRocklin",cuerdas:6,color:"AZUL",precio:1700},
    {id:1,imagen:"img/img-2.png",tipo:"GUITARRA",modelo:"TYPE-X",cuerdas:6,color:"ARCOIRIS",precio:1600},
    {id:2,imagen:"img/img-3.png",tipo:"GUITARRA",modelo:"VADER",cuerdas:7,color:"NEGRO",precio:1600},
    {id:3,imagen:"img/img-4.png",tipo:"GUITARRA",modelo:"TYPE-V",cuerdas:8,color:"BLANCO",precio:1400},
    {id:4,imagen:"img/img-a.png",tipo:"BAJO",modelo:"VADER B",cuerdas:4,color:"VERDE",precio:1800},
    {id:5,imagen:"img/img-b.png",tipo:"BAJO",modelo:"WOOD",cuerdas:6,color:"MATE",precio:1700},
    {id:6,imagen:"img/img-c.png",tipo:"BAJO",modelo:"ZEUS",cuerdas:7,color:"VIOLETA",precio:1900},
    {id:7,imagen:"img/img-d.png",tipo:"BAJO",modelo:"THANOS",cuerdas:5,color:"ROJO",precio:1500},
]
let contenedorCarrito = document.getElementById("carrito")

let carrito; 
function carroEnStorage(){
    let contenidoStorage =JSON.parse(localStorage.getItem("carritoEnStorage"))
    if(contenidoStorage){
        let array=[]
        for(const objeto of contenidoStorage){
            let instrumento = new Instrumento(objeto,objeto.cantidad);
            instrumento.actualizarPrecioTotal();
            array.push(instrumento)
        }
        imprimirTabla(array)
        return array;
    }
    return [];
}

function imprimirProdEnHTML(array){
    let productos = document.getElementById("prod")
    productos.innerHTML = "";

    for(const producto of array){
        let div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML += `
                <div class="img">
                <img src="${producto.imagen}" alt="guitarra">
                </div>
                <div class="especificaciones">
                    <h2>${producto.tipo}</h2>
                    <p>${producto.modelo}</p>
                    <p>${producto.cuerdas} cuerdas</p>
                    <p>${producto.color}</p>
                    <p class="precioProducto" >$${producto.precio}</p>
                    <button id="agregar${producto.id}" class="boton-agregar"> Comprar </button>                
                </div>
        `;
        productos.appendChild(div);
        let boton = document.getElementById(`agregar${producto.id}`);
        boton.addEventListener("click", () => agregarAlCarrito(producto.id));
    }
}

function agregarAlCarrito(idProducto){
    let instrumentoEnCarrito = carrito.find((elemento)=>elemento.id === idProducto);
    if(instrumentoEnCarrito){
        let index = carrito.findIndex((elemento)=> elemento.id === instrumentoEnCarrito.id);
        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    }else{
        carrito.push(new Instrumento(instrumentos[idProducto],1))
    }
    localStorage.setItem("carritoStorage",JSON.stringify(carrito));
    imprimirTabla(carrito)
}

function eliminarDelCarrito(id){
    let instrumento = carrito.find((instrumento)=>instrumento.id === id);
    let index = carrito.findIndex((elemento)=>elemento.id === instrumento.id);
    if(instrumento.cantidad>1){
        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    }else{
        carrito.splice(index,1)
    }
    swal("producto eliminado","","success")
    localStorage.setItem("carritoEnStorage",JSON.stringify(carrito));
    imprimirTabla(carrito);
}

function eliminarCarrito(){
    carrito = [];
    localStorage.removeItem("carritoEnStorage");
    document.getElementById("carrito").innerHTML = "";
    document.getElementById("acciones-carrito").innerHTML = "";
}
function obtenerPrecioTotal(array) {
    return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
}

function imprimirTabla(array){
    let precioTotal = obtenerPrecioTotal(array);
    let contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";
    let tabla = document.createElement("div")
    tabla.innerHTML = `
    <table id="tablaCarrito" class="tabla">
            <thead>         
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>

            <tbody id="bodyTabla">
            </tbody>
        </table>
    `;
    contenedor.appendChild(tabla);
    let bodyTabla = document.getElementById("bodyTabla")
    for(let instrumentos of array){
        let datos = document.createElement("div")
        datos.innerHTML = `
                <td>${instrumentos.marca}</td>
                <td>${instrumentos.cantidad}</td>
                <td>$${instrumentos.precioTotal}</td>
                <td><button id="eliminar${instrumentos.id}">Eliminar</button></td>`;

        bodyTabla.appendChild(datos);

        let botonEliminar = document.getElementById(`eliminar${instrumentos.id}`);
        botonEliminar.addEventListener("click", () => eliminarDelCarrito(instrumentos.id));
    }
}

imprimirProdEnHTML(instrumentos)





//FORMULARIO que guarda un usuario con su consulta en el localStorage y devuelve un parrafo agradeciendo la consulta con los datos ingresados
class Usuarios{
    constructor(nombre,correo,textArea){
        this.nombre=nombre
        this.correo=correo
        this.textArea=textArea
    }
}
const user = []
const form = document.getElementById("formulario")
form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    let nombre=document.getElementById("nombre").value
    let correo=document.getElementById("correo").value
    let textArea = document.getElementById("textArea").value
    const usuario = new Usuarios(nombre,correo,textArea)
    user.push(usuario)
    form.reset();
    localStorage.setItem("Usuario", JSON.stringify(user))
    const cartel = document.getElementById("contactos");
    const dato = JSON.parse(localStorage.getItem("Usuario"));
    dato.forEach(user =>{
        cartel.innerHTML += `<p>Gracias por contactarse con nosotros ${user.nombre}
        a la brevedad le enviaremos un correo a ${user.correo}</p>`
    })
})


//informacion de el autor, cuando el mouse se encima a la imagen y cuando se saca deja de existir la informacion
const autor = document.getElementById("autor")
autor.addEventListener("mouseenter",()=>{
    const parrafo = document.createElement("p")
    parrafo.innerHTML += `Buenas mi nombre es Chazarreta Cristian Gabriel y este sitio web esta hecho con el fin de incorporar varios eventos de js donde el usuario pueda interactuar, a medida que aprenda 
    cosas nuevas ire agregandolas, espero que tengan un buen codigo y disfruten.`
    autor.append(parrafo)
    
    autor.addEventListener("mouseleave",()=>{
        parrafo.remove()
    })
})