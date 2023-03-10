//IMPORTATION FRAMEWORK/BASE DE DONNÉE
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const path = require('path');



//IMPORTATION DES ROUTER
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');


//CONNECTION DE MON API A MON CLUSTER MONGODB
mongoose.connect('mongodb+srv://aline_bb:MdJxgNYGVWdDY6n8@cluster0.jj6ina4.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// MIDDLEWARE GÉNÉRALE POUR TOUTES LES ROUTES (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Pour analyser le corps de la requête
app.use(express.json());

//POUR ENREGISTER LES ROUTER
app.use('/api/auth', userRoutes);
//on récupère le répertoire dans lequel se trouve notre serveur et y concaténer le répertoire image
//pour obtenir le chemin complet sur le disque.
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);





module.exports = app;