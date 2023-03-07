//CONFIGURATION DES ROUTES
const express = require('express');
const userCtrl = require('../controllers/user')

//CRÉATION DU ROUTER AVEC LA FONCTION ROUTER D'EXPRESS
const router = express.Router();

// ICI ON UTILISE DES ROUTES POST CAR LE FRONTEND VA AUSSI ENVOYER DES INFOS(EMAIL ET PASSWORD)
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


//Exportation du router
module.exports = router;