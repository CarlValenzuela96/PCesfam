'use strict'

const mongoose = require('mongoose'); 
const app = require('./app');
const config = require('./config');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const publicRoutes = require('./routes/publicRoutes');

app.use(cors());
app.use('/auth',authRoutes);
app.use('/protected',protectedRoutes);
app.use('/public',publicRoutes);


mongoose.connect(config.db,{ useNewUrlParser: true },(err,res)=>{
    if(err){
        return console.log(`Error al conectar a base de datos: ${err}`);
    }
    console.log('conexion a base de datos establecida');

    //Start backend
    app.listen(config.port, () => {
        console.log(`API REST conrriendo en http://localhost:${config.port}`);
        
    });

    
})