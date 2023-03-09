// IMPORTATION DU MODELE SAUCE
const Sauce = require('../models/Sauce');



//Ici on exporte un fonction appeler "getAllSauces" pour récupérer toutes les sauces
exports.getAllSauces = (req, res, next) => {
    //Récupère le tableau de toutes les sauces retournées pas la base de données
    //Méthode find pour trouver toutes les sauces
    Sauce.find()
        // On les renvoie en réponse
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
};

//Ici on exporte un fonction appeler "createSauce" pour la création d'un objet sauce
//d'abord parser l'objet requête car l'ojet va nous etre envoyé sous forme json mais en chaîne de caractères
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    //on supprime deux champs
    delete sauceObject._id;
    delete sauceObject._userId; //ne pas faire confiance au client, utiliser ici le userId tu token
    const sauce = new Sauce({
        ...sauceObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`//on génère l'url de l'image nous-même
    });
    // Enregistrer cette sauce dans la base de donnée
    sauce.save()
    .then(() => { res.status(201).json({message: 'Sauce enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };

//Ici on exporte un fonction appeler "getOneSauce" pour récupérer une sauce
exports.getOneSauce = (req, res, next) => {
    /*Méthode findOne pour trouver une sauce
    et j'y aurai accès dans l'objet suivant "params.id" qui est un paramètre de route dynamique*/
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({ error }));//erreur 404 pour objet non touvé

};

//Ici on exporte un fonction appeler "modifySauce" pour mise à jour d'une sauce
exports.modifySauce = (req, res, next) => {
    //Ici on rajoute la nouvelle version de l'objet avec { ...req.body, _id: req.params.id }
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce modifiée !' }))
        .catch(error => res.status(400).json({ error }));
};

//Ici on exporte un fonction appeler "deleteSauce" pour la suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce supprimée !' }))
        .catch(error => res.status(400).json({ error }));
};
