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

    let nombre=document.getElementById("nombre")
    let correo=document.getElementById("correo")
    let textArea = document.getElementById("textArea")
    const usuario = new Usuarios(nombre,correo,textArea)
    user.push(usuario)
    console.log(user)
})
