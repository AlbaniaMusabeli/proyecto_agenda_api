document.querySelector("#registrar-btn").addEventListener("click", async ()=>{

    let nombre = document.querySelector("#nombre-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let telefono = document.querySelector("#telefono-txt").value.trim();

    let objeto = {nombre:nombre, correo:correo, telefono:telefono};

    await agregarContactos(objeto);

    Swal.fire(
        'Guardado',
        'Datos guardados con éxito',
        'success'
      )

    //limpiar campos
    document.querySelector("#nombre-txt").value = ""
    document.querySelector("#correo-txt").value = ""
    document.querySelector("#telefono-txt").value = ""

});