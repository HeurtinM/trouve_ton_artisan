const express = require('express');
const router = express.Router();
const { Categorie } = require('../models');

router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


module.exports = router;
