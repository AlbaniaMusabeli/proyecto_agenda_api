//Conexion con la base de datos mysql

//1. Importar sequelize
const Sequelize = require('sequelize');

//2. Llamar a tabla contacto que esta en models
const Contacto = require('../models').contacto;

const {Op} = require('sequelize');

//3. Funcion para llamar a los contactos
exports.getAll = async (filtro = null)=>{
    //hacer un select a la tabla contactos
    let contactos = null;
    if(filtro == null){
        contactos = await Contacto.findAll({});
    }else{
        contactos = await Contacto.findAll({
            where:{
                [Op.or]:[
                    {nombre:{[Op.like]: `%${filtro}%`}},
                    {correo:{[Op.like]: `%${filtro}%`}},
                    {telefono:{[Op.like]: `%${filtro}%`}}

                ]
            }
        })
    }
    

    return contactos;
};

//4. Guardar los datos en tabla contactos
exports.save = async(contacto)=>{
    return await Contacto.create(contacto);
}

