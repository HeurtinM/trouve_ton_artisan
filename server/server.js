const express = require('express');
const sequelize = require('./config/database');
const { Artisan} = require('./models');

const app = express();
const port = 8000;

sequelize.authenticate()
  .then(() => console.log('✅ Connexion DB réussie'))
  .catch(err => console.error('❌ Erreur DB', err))

app.listen(port, () =>{
    console.log('Server app listening on port' + port);
});

//test


Artisan.findAll()
  .then(data => console.log(data.length))
  .catch(err => console.error(err));