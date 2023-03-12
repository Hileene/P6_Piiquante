//IMPORTATION DU PACKAGE DE CRYPTAGE
const bcrypt = require('bcrypt');

//IMPORTATION DU PACKAGE D'ENCODAGE DU TOKEN (PERMET DE CRÉER DES TOKEN ET DE LES VÉRIFIER)
const jwt = require('jsonwebtoken');

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
     // Vérifie si l'utilisateur existe dans notre base de donnée
     User.findOne({ email: req.body.email })
     .then(user => {
         if (!user) {
          // Erreur 401 Unauthorized
             return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});// messsage volontairement vague pour ne pas divulger si un utilisateur est inscrit sur le site
         }
         // Compare le mot de passe inscrit par l'utilisateur et celui de la base de donnée
         bcrypt.compare(req.body.password, user.password)
             .then(valid => {
                 if (!valid) {
                     return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                 }
                 res.status(200).json({
                     userId: user._id,
                     //token: "TOKEN"
                     //Permet d'authentifier une requête
                     token: jwt.sign(
                      { userId: user._id },
                      'RANDOM_TOKEN_SECRET',
                      { expiresIn: '24h' }
                  )
                 });
             })
             .catch(error => res.status(500).json({ error }));
     })
     .catch(error => res.status(500).json({ error }));

};