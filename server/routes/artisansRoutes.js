const express = require('express');
const router = express.Router();
const { Artisan, Specialite, Categorie } = require('../models'); //specialité et catégorie sont la pour le search
const { Op } = require('sequelize');

console.log("node test")

router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          include: [Categorie]
        }
      ]
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/top', async (req, res) => {
    try{
        const artisans = await Artisan.findAll({
            where: {
                top: 1
            },
             include: [
              {
                model: Specialite,
                include: [Categorie]
              }
            ]
        });
        res.json(artisans);
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});


//créé en suivant la doc: https://sequelize.org/docs/v7/querying/operators/
router.get('/search', async (req, res) => {
  try {
    const search = req.query.q;

    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          include: [Categorie]
        }
      ],
      where: {
        [Op.or]: [
          { nom: { [Op.like]: `%${search}%` } },
          { ville: { [Op.like]: `%${search}%` } },
          { '$Specialite.nom$': { [Op.like]: `%${search}%` } },
          { '$Specialite.Categorie.nom$': { [Op.like]: `%${search}%` } }
        ]
      }
    });

    res.json(artisans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:id', async(req, res)=>{
    try{
        const artisans = await Artisan.findOne({
            where:{
                id: req.params.id
            },
             include: [
              {
                model: Specialite,
                include: [Categorie]
              }
            ]  
        })
        res.json(artisans);
    }catch (err){
        res.status(500).json({ error: 'Erreur serveur' });
    }
})


module.exports = router;
