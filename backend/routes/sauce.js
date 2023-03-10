//IMPORTATION DU FRAMEWORK EXPRESS
const express = require('express');
const router = express.Router();
// Ici on importe la logique métier avec stuffCtrl
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
//importation du multer pour télécharger des fichiers images
const multer = require('../middleware/multer-config');




// Pour récupérer toutes les sauces de la base de donnée (sauces)
//le slash(/) est un raccourci pour ('/api/sauces') qui revient pour toutes les routes
router.get('/', auth, sauceCtrl.getAllSauces);
//Pour créer/publier une sauce
//en ajoutant multer le format de la requête à changer dc aller dans controllers
router.post('/', auth, multer, sauceCtrl.createSauce );
//Pour récupérer une sauce
// le ":id" indique a express que cette partie de la route est dynamique
router.get('/:id', auth, sauceCtrl.getOneSauce)
// Pour mettre à jour une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce );
//Pour supprimer une sauce
router.delete('/:id',auth, sauceCtrl.deleteSauce);
// Ajouter ou retirer un like
router.post('/:id/like', auth, sauceCtrl.likeSauce);

// exportation du router
module.exports = router;