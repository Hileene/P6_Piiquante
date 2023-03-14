//CONFIGURATION DES ROUTES
const express = require('express');
//Création du router
const router = express.Router();
//Importation du middleware pour sécuriser les mots de passe
const password = require('../middleware/password');

const rateLimit = require("express-rate-limit");
const userCtrl = require('../controllers/user');


const limiter = rateLimit({
    windowMS: 15 * 60 * 1000, //15 minutes soit l'intervalle accordé pour chaque requête
    max: 5, // limite le nombre de requête par IP à 5
    statusCode: 200, 
    message: {
      status: 429,
      limiter: true,
      type: 'error',
      message: 'Too many API requests from this IP, please try again 15 min.'
    }

    
});

const signupLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 heure
    max: 5, // Se bloque après 5 requêtes
    statusCode: 200, 
    message: {
      status: 429,
      limiter: true,
      type: 'error',
      message: 'Too many accounts created from this IP, please try again after an hour.'
    }

  });



// ICI ON UTILISE DES ROUTES POST CAR LE FRONTEND VA AUSSI ENVOYER DES INFOS(EMAIL ET PASSWORD)
router.post('/signup', password, signupLimiter, userCtrl.signup);
router.post('/login', limiter, userCtrl.login);


//Exportation du router
module.exports = router;