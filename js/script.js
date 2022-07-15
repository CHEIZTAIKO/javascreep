//OBJETOS PARA LAS CARDS
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
instrumentos.push(new Instrumento("card-1","img/img-1.png","GUITARRA","McRocklin",6,"AZUL",1500))
instrumentos.push(new Instrumento("card-2","img/img-2.png","GUITARRA","TYPE-X",6,"ARCOIRIS",1500))
instrumentos.push(new Instrumento("card-3","img/img-3.png","GUITARRA","VADER",7,"NEGRO",1500))
instrumentos.push(new Instrumento("card-4","img/img-4.png","GUITARRA","TYPE-V",8,"BLANCO",1500))
instrumentos.push(new Instrumento("card-a","img/img-a.png","BAJO","VADER B",4,"VERDE",1500))
instrumentos.push(new Instrumento("card-b","img/img-b.png","BAJO","WOOD",6,"MATE",1500))
instrumentos.push(new Instrumento("card-c","img/img-c.png","BAJO","ZEUS",7,"VIOLETA",1500))
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
                <p>${producto.cuerdas}}</p>
                <p>${producto.color}</p>
                <p>$${producto.precio}</p>
                <button type="submit">BUY</button>
                </div>
        </article>
    `
}




//FORMULARIO
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
    console.log(user)
    form.reset()
})
