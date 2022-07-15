//OBJETOS PARA LAS CARDS
class Instrumento{
    constructor(imagen,tipo,modelo,cuerdas,color,precio){
        this.imagen=imagen
        this.tipo=tipo
        this.modelo=modelo
        this.cuerdas=cuerdas
        this.color=color
        this.precio=precio
    }
}
const instrumentos = []
instrumentos.push(new Instrumento("img/img-1","GUITARRA","McRocklin",6,"AZUL",1500))
instrumentos.push(new Instrumento("img/img-2","GUITARRA","TYPE-X",6,"ARCOIRIS",1500))
instrumentos.push(new Instrumento("img/img-3","GUITARRA","VADER",7,"NEGRO",1500))
instrumentos.push(new Instrumento("img/img-4","GUITARRA","TYPE-V",8,"BLANCO",1500))
instrumentos.push(new Instrumento("img/img-5","BAJO","VADER B",4,"VERDE",1500))
instrumentos.push(new Instrumento("img/img-6","BAJO","WOOD",6,"MATE",1500))
instrumentos.push(new Instrumento("img/img-7","BAJO","ZEUS",7,"VIOLETA",1500))
instrumentos.push(new Instrumento("img/img-8","BAJO","THANOS",5,"ROJO",1500))

const productos = document.getElementById("prod")

for(const producto of instrumentos){
    productos.innerHTML += `
    <article class="card">
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
