const express = require('express');
const router = express.Router();
const { Specialite } = require('../models');

router.get('/', async (req, res) => {
  try {
    const specialites = await Specialite.findAll();
    res.json(specialites);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/categorie/:id', async (req, res) => {
  try {
    const specialites = await Specialite.findAll({
        where: {
            categorie_id: req.params.id
        }
    });
    res.json(specialites);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


module.exports = router;
