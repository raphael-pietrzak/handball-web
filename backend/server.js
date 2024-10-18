const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
app.use(cors());


const sequelize = require('./database');
const User = require('./models/User');
const Match = require('./models/Match');

// Synchroniser les modèles
sequelize.sync({ alter: true }) // Utilise { force: true } pour recréer les tables (perte de données)
    .then(async () => {
        console.log('Tables créées avec succès');
        // Ajouter des utilisateurs
        const users = await User.bulkCreate([
            { name: 'Alice', email: 'alice@example.com', password: 'password123' },
            { name: 'Bob', email: 'bob@example.com', password: 'password456' },
        ]);

        console.log('Utilisateurs ajoutés avec succès :', users);

        // Ajouter des matchs
        const matches = await Match.bulkCreate([
            { team1: 'Montpellier', team2: 'Lyon', match_date: new Date(), score: '10-8' },
            { team1: 'Paris', team2: 'Nantes', match_date: new Date(), score: '12-12' },
        ]);

        console.log('Matchs ajoutés avec succès :', matches);
    })
    .catch((error) => {
        console.error('Erreur lors de la création des tables');
    });


// Middleware pour parser JSON
app.use(express.json());

// Route de register
app.post('/register', async (req, res) => {
    const { username, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name: name, email: username, password: hashedPassword, created_at: new Date() });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
});






// Route de login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { email: username } });
    if (user) {
        console.log('Utilisateur trouvé :', user.name);
    }
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key', { expiresIn: '1h' });
        console.log('Token généré avec succès');
        res.json({ token });
    } else {
        console.log('Identifiants invalides');
        res.status(401).json({ error: 'Identifiants invalides' });
    }
});

// Route pour obtenir tous les matchs
app.get('/matches', async (req, res) => {
    const matches = await Match.findAll();
    res.json(matches);
});

// Route pour créer un nouveau match
app.post('/matches', async (req, res) => {
    const { team1, team2, match_date, score } = req.body;
    try {
        const match = await Match.create({ team1, team2, match_date, score });
        res.status(201).json(match);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la création du match' });
    }
});

// Synchroniser avec la base de données et démarrer le serveur
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Serveur en écoute sur le port 3000');
    });
});