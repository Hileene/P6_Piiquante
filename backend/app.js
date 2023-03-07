//IMPORTATION FRAMEWORK/BASE DE DONNÉE
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//IMPORTATION DES ROUTER
const userRoutes = require('./routes/user');


//CONNECTION DE MON API A MON CLUSTER MONGODB
mongoose.connect('mongodb+srv://aline_bb:MdJxgNYGVWdDY6n8@cluster0.jj6ina4.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    
const app = express();

// MIDDLEWARE GÉNÉRALE POUR TOUTES LES ROUTES
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
  
  app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
  });
  
  app.use((req, res, next) => {
    res.status(201);
    next();
  });
  
  app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });
  





module.exports = app;