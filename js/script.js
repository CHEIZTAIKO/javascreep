//objetos para las cards, los objetos son estaticos, el unico cambio de posicion se lo doy mediante una grilla creada con css
const instrumentos = [
    {id:1,imagen:"img/img-1.png",tipo:"GUITARRA",modelo:"McRocklin",cuerdas:6,color:"AZUL",precio:1700,cantidad:0},
    {id:2,imagen:"img/img-2.png",tipo:"GUITARRA",modelo:"TYPE-X",cuerdas:6,color:"ARCOIRIS",precio:1600,cantidad:0},
    {id:3,imagen:"img/img-3.png",tipo:"GUITARRA",modelo:"VADER",cuerdas:7,color:"NEGRO",precio:1600,cantidad:0},
    {id:4,imagen:"img/img-4.png",tipo:"GUITARRA",modelo:"TYPE-V",cuerdas:8,color:"BLANCO",precio:1400,cantidad:0},
    {id:5,imagen:"img/img-a.png",tipo:"BAJO",modelo:"VADER B",cuerdas:4,color:"VERDE",precio:1800,cantidad:0},
    {id:6,imagen:"img/img-b.png",tipo:"BAJO",modelo:"WOOD",cuerdas:6,color:"MATE",precio:1700,cantidad:0},
    {id:7,imagen:"img/img-c.png",tipo:"BAJO",modelo:"ZEUS",cuerdas:7,color:"VIOLETA",precio:1900,cantidad:0},
    {id:8,imagen:"img/img-d.png",tipo:"BAJO",modelo:"THANOS",cuerdas:5,color:"ROJO",precio:1500,cantidad:0},
]

const productos = document.getElementById("prod")
const contenedorCarrito = document.getElementById("carrito-contenedor")

let carrito = []; 

instrumentos.forEach((producto)=>{
    const div = document.createElement("div")
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
    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    });
})

const agregarAlCarrito = (prodId) => {
    const item = instrumentos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
}
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod)=>{
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `<p>${prod.tipo} ${prod.modelo}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito" class="boton-eliminar"><i class="fas fa-trash-alt"</button>`
        contenedorCarrito.appendChild(div)
    })
}
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