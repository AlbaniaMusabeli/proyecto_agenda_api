//Obtener desde el localstorage
const obtenerContactos = (filtro=null)=>{

    let lista = localStorage.getItem("contactos");
    if(lista){
        lista = JSON.parse(lista);
    }
    else{
        lista = [];
    }

    //filtro
    if(filtro != null){
        lista = lista.filter(i=> i.nombre.includes(filtro) || i.correo.includes(filtro) || i.telefono.includes(filtro));
    }

    return lista;

};

//Agregar contactos al localstorage
const agregarContactos = (contacto)=>{

    let lista = obtenerContactos();
    lista.push(contacto);
    localStorage.setItem("contactos", JSON.stringify(lista));
};