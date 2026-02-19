const express = require('express');
const router = express.Router();

const categoriesRoutes = require('./categoriesRoutes');
const specialitesRoutes = require('./specialitesRoutes');
const artisansRoutes = require('./artisansRoutes');
const contactRoutes = require("./contactRoutes");

console.log("index routes chargé")

// test interne
router.get('/test', (req, res) => {
  res.send('API ROUTER OK');
});

router.use('/categories', categoriesRoutes);

router.use('/specialites', specialitesRoutes);

router.use('/artisans', artisansRoutes);

router.use("/contact", contactRoutes);

module.exports = router;
