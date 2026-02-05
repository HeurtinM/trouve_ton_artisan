const Artisan = require('./artisan');
const Specialite = require('./specialite');
const Categorie = require('./categorie');

// Relations
Categorie.hasMany(Specialite, { foreignKey: 'categorie_id' });
Specialite.belongsTo(Categorie, { foreignKey: 'categorie_id' });

Specialite.hasMany(Artisan, { foreignKey: 'specialite_id' });
Artisan.belongsTo(Specialite, { foreignKey: 'specialite_id' });

module.exports = {
  Artisan,
  Specialite,
  Categorie
};
