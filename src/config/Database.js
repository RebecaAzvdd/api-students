const mongoose = require('mongoose');
require('dotenv').config();

const connection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MONGO CONECTADO');
    }catch(error) {
        console.error('ERRO AO CONECTAR', error);
        process.exit(1);
    }
};

module.exports = connection;