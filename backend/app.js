//IMPORTATION FRAMEWORK/BASE DE DONNÉE
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const app = express();

//CONNECTION DE MON API A MON CLUSTER MONGODB
mongoose.connect('mongodb+srv://aline_bb:MdJxgNYGVWdDY6n8@cluster0.jj6ina4.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));




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