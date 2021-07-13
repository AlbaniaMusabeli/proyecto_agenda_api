# Proyecto creacion de API Rest con NodeJS-Express para Proyecto Agenda

## Proyecto Agenda

_Comandos para la creacion del Proyecto_

```
npm init
```

_Instalación de Paquetes_

```
npm install express --save
npm install -D nodemon
npm install --save body-parser
npm install --save sequelize
npm install --save mysql2
npm install --save cors
npm install --save -g sequelize-cli
```

_Crear modelo para tabla Contactos_

```
sequelize model:create --name contacto --attributes nombre:string,correo:string,telefono:string

sequelize bd:migrate
```