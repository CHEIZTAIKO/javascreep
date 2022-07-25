//objetos para las cards, los objetos son estaticos, el unico cambio de posicion se lo doy mediante una grilla creada con css
class Instrumento{
    constructor(clase,imagen,tipo,modelo,cuerdas,color,precio){
        this.clase=clase
        this.imagen=imagen
        this.tipo=tipo
        this.modelo=modelo
        this.cuerdas=cuerdas
        this.color=color
        this.precio=precio
    }
}
const instrumentos = []
instrumentos.push(new Instrumento("card-1","img/img-1.png","GUITARRA","McRocklin",6,"AZUL",1700))
instrumentos.push(new Instrumento("card-2","img/img-2.png","GUITARRA","TYPE-X",6,"ARCOIRIS",1800))
instrumentos.push(new Instrumento("card-3","img/img-3.png","GUITARRA","VADER",7,"NEGRO",1600))
instrumentos.push(new Instrumento("card-4","img/img-4.png","GUITARRA","TYPE-V",8,"BLANCO",1400))
instrumentos.push(new Instrumento("card-a","img/img-a.png","BAJO","VADER B",4,"VERDE",1800))
instrumentos.push(new Instrumento("card-b","img/img-b.png","BAJO","WOOD",6,"MATE",1700))
instrumentos.push(new Instrumento("card-c","img/img-c.png","BAJO","ZEUS",7,"VIOLETA",1900))
instrumentos.push(new Instrumento("card-d","img/img-d.png","BAJO","THANOS",5,"ROJO",1500))

const productos = document.getElementById("prod")

for(const producto of instrumentos){
    productos.innerHTML += `
    <article class="card ${producto.clase}">
            <div class="img">
            <img src="${producto.imagen}" alt="guitarra">
            </div>
            <div class="especificaciones">
                <h2>${producto.tipo}</h2>
                <p>${producto.modelo}</p>
                <p>${producto.cuerdas} cuerdas</p>
                <p>${producto.color}</p>
                <p>$${producto.precio}</p>
                <button type="submit">BUY</button>
                </div>
        </article>
    `
}

//FORMULARIO que guarda un usuario con su consulta, mas adelante agregare que la consulta se deribe a un email creado especialmente para ello.
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