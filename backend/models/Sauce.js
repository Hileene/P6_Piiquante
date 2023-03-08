const mongoose = require('mongoose');

// CREATION D'UN SCHÉMA DE DONNÉE AVEC TOUTES LES INFOS DONT NOS SAUCES AURONT BESOINS
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: [{ type: String }],
    usersDislied: [{ type: String }],
  });

 //EXPORTATION DU MODEL CORRESPONDANT
module.exports = mongoose.model('Sauce', sauceSchema);// 1er argument 'nom' du model(ou type) 2ème argument le shéma qu'on va utiliser 