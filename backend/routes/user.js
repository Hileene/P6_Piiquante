//CONFIGURATION DES ROUTES
const express = require('express');
//CRÉATION DU ROUTER AVEC LA FONCTION ROUTER D'EXPRESS
const router = express.Router();
const rateLimit = require("express-rate-limit");
const userCtrl = require('../controllers/user');


const limiter = rateLimit({
    windowMS: 15 * 60 * 1000, //15 minutes soit l'intervalle accordé pour chaque requête
    max: 5, // limite le nombre de requête par IP à 5 
    message: "Too many API request for this IP, please try again after 15 minutes",
    
});

const signupLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 heure
    max: 5, // Ce bloque après 5 requêtes
    message:
      "Too many accounts created from this IP, please try again after an hour",
  });



// ICI ON UTILISE DES ROUTES POST CAR LE FRONTEND VA AUSSI ENVOYER DES INFOS(EMAIL ET PASSWORD)
router.post('/signup', signupLimiter, userCtrl.signup);
router.post('/login', limiter, userCtrl.login);


//Exportation du router
module.exports = router;