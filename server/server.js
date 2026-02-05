const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();
const port = 5000;

console.log('server lancé');

app.use(express.json());

// routes de test
app.get('/', (req, res) => {
  res.send('API OK');
});

// routes API
// app.use('/api', routes);

sequelize.authenticate()
  .then(() => console.log('✅ Connexion DB réussie'))
  .catch(err => console.error('❌ Erreur DB', err));

app.listen(port, () => {
  console.log('Server app listening on port ' + port);
});
