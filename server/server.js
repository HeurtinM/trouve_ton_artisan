const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes/index');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(cors({
  exposedHeaders: ['Authorization'],
  origin: "*"
}));
app.use(express.json());

// routes de test
app.get('/', (req, res) => {
  res.send('API ok');
});

//routes API
app.use('/api', routes);

sequelize.authenticate()
  .then(() => console.log('✅ Connexion DB réussie'))
  .catch(err => console.error('❌ Erreur DB', err));

app.listen(port, () => {
  console.log('Server app listening on port ' + port);
});
