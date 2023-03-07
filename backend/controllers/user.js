//IMPORTATION DU PACKAGE DE CRYPTAGE
const bcrypt = require('bcrypt');

//IMPORTATION DU MODELE USER
const User = require('../models/User');



// Cette fonction est pour l'enregistrement de nouveaux utilisateurs
exports.signup = ( req, res, next ) => {
     //D'abord, il faut hasher(crypter) le mot de passe avec une fonction asynchrone
     // le 10 représente les tours que va faire l'algorithme pour le sécuriser
     bcrypt.hash(req.body.password, 10)
     .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        // Ensuite on enregiste le nouvel utilisateur dans la base de donnée
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
          .catch(error => {
              console.log(error);
              res.status(400).json({ error })
          });
              
      })
      .catch(error => res.status(500).json({ error }));// erreur 500 = erreur de serveur

};


// Cette fonction est pour connecter des utilisateurs existants
exports.login = ( req, res, next ) => {

}