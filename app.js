const mongoose = require('mongoose');
const {Users} = require('./modeloUsuarios')

const DB_URI = 'mongodb://localhost:27017/applogin'

//CONEXION

mongoose.connect(DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    }, (err) => {
        if (err) {
            console.log('******** ERROR DE CONEXION ******');
        } else {
            console.log('******CONEXION COMPLETADA******');
        }
    });



const crearDatos = () => {
Users.create(
    {
        name: '',
        lastname: '',
        rut: '',
        pass: '',
        email: 'probar@gmail.com',
        rol: ''

    }
)
}


crearDatos()