//Importar express
const express = require('express');

//Importar body-parser: para aceptar peticiones en json
const bodyParser = require('body-parser');

//Importar cors: aceptar perticiones de puertos
const cors = require('cors');

//Importar contactos-services
const contactosService = require('./services/contactos-services');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));//para hacer peticiones por url
app.use(bodyParser.json());

//Definir las rutas
app.get('/',(req,res)=>{
    return res.send("Hola esto esta funcionando!! MIAU SUPER GENIAL");
});

//Peticion GET para listar los contactos
app.get('/contactos', async(req,res)=>{
    let contactos = await contactosService.getAll();
    return res.send(contactos);
});

app.get('/contactos/:filtro', async(req,res)=>{
    let contactos = await contactosService.getAll(req.params.filtro);
    return res.send(contactos);
})

//Peticion POST para ingresar los datos a la bbdd
app.post('/contactos', async(req,res)=>{
    let contacto = req.body;
    let nuevoContacto = await contactosService.save(contacto);
    return res.send(nuevoContacto);
});

//Puerto
app.listen(8080);

