const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Chemin vers ton fichier de configuration de base de données

const Match = sequelize.define('Match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    team1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    team2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    match_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    score: {
        type: DataTypes.STRING,
        allowNull: true, // Le score peut être vide
    },
}, {
    tableName: 'matches',
    timestamps: false, // Si tu utilises `created_at` manuellement
});

module.exports = Match;