//Obtener desde el localstorage
const obtenerContactos = async (filtro=null)=>{

    let lista = null;

    if(filtro == null){
        let res = await axios.get("http://localhost:8080/contactos");
        lista = res.data;
    }else{
        let res = await axios.get(`http://localhost:8080/contactos/${filtro}`);
        lista = res.data;
    }

    return lista;

};

//Agregar contactos al localstorage
const agregarContactos = async (contacto)=>{
    
    await axios.post("http://localhost:8080/contactos", contacto);
};