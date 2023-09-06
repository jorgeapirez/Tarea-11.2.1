const formulario= document.getElementById('form')
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value
const apellido = document.getElementById('apellido').value
const fecha = document.getElementById('fecha').value
const URL= 'https://jsonplaceholder.typicode.com/users'
let datos={
    Nombre: nombre,
    Apellido: apellido,
    Fecha: fecha
}
const datosJSON = JSON.stringify(datos)

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: datosJSON
})
.then(response =>{
    if(!response.ok){
        throw new Error('error')
    }
    return response.json();
})
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.error(error);
})

})


