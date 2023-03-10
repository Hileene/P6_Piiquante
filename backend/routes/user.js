//CONFIGURATION DES ROUTES
const express = require('express');
//CRÉATION DU ROUTER AVEC LA FONCTION ROUTER D'EXPRESS
const router = express.Router();
const userCtrl = require('../controllers/user')

// ICI ON UTILISE DES ROUTES POST CAR LE FRONTEND VA AUSSI ENVOYER DES INFOS(EMAIL ET PASSWORD)
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


//Exportation du router
module.exports = router;