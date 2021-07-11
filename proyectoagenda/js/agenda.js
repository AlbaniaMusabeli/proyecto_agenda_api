const cargarTabla = (contactos)=>{
    //1. Ir a buscar el tbody
    const tbody = document.querySelector("#tbody-contactos");

    //Vaciar el contenido de la tabla antes de llenarlo con los datos
    tbody.innerHTML = "";


    //2. Recorrer la lista de contactos
    contactos.forEach( i=>{
        let fila = document.createElement("tr");
        let columnaNombre = document.createElement("td");
        columnaNombre.innerText = i.nombre;

        let columnaCorreo = document.createElement("td");
        columnaCorreo.innerText = i.correo;

        let columnaTelefono = document.createElement("td");
        columnaTelefono.innerText = i.telefono;

        fila.appendChild(columnaNombre);
        fila.appendChild(columnaCorreo);
        fila.appendChild(columnaTelefono);

        //agreagr todas las filas ala tabla (tbody)
        tbody.appendChild(fila);

    });


};

window.addEventListener("DOMContentLoaded", ()=>{
    let contactos = obtenerContactos();
    cargarTabla(contactos);
});


//filtro
document.querySelector("#filtro-txt").addEventListener("input", ()=>{

    let filtro = document.querySelector("#filtro-txt").value.trim();
    let contactos = obtenerContactos(filtro);
    cargarTabla(contactos);

});
