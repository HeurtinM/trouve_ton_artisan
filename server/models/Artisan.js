const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  note: {
    type: DataTypes.DECIMAL(2,1),
    allowNull: false
  },
  ville: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  a_propos: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  site_web: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  top: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  specialite_id: {
  type: DataTypes.INTEGER,
  allowNull: false
}
}, {
  tableName: 'artisan',
  timestamps: false
});

module.exports = Artisan;
