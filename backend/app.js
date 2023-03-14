//IMPORTATION FRAMEWORK/BASE DE DONNÉE
const express = require('express');
const mongoose = require('mongoose');
//IMPORTATION DES ROUTER
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
mongoose.set('strictQuery', true);
require('dotenv').config();
const path = require('path');
//Helmet aide a sécuriser les applications Express en configurant des en-têtes HTPP
const app = express();
const helmet= require('helmet');




//CONNECTION DE MON API A MON CLUSTER MONGODB
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// MIDDLEWARE GÉNÉRALE POUR TOUTES LES ROUTES (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Pour analyser le corps de la requête
app.use(express.json());

app.use(helmet()); 

app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));


//POUR ENREGISTER LES ROUTER
app.use('/api/auth', userRoutes);
//on récupère le répertoire dans lequel se trouve notre serveur et y concaténer le répertoire image
//pour obtenir le chemin complet sur le disque.
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);





module.exports = app;