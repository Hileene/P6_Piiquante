// IMPORTATION DU MODELE SAUCE
const Sauce = require('../models/Sauce');
const fs = require('fs');



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
    .then(() => { res.status(201).json({message: 'Sauce enregistrée !'})})
    .catch(error => { res.status(400).json( { error })})
};


//Ici on exporte un fonction appeler "modifySauce" pour mise à jour d'une sauce
exports.modifySauce = (req, res, next) => {
    //nous devons prendre en compte deux possibilités : l'utilisateur a mis à jour l'image ou pas
    const sauceObject = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
        //Il faut aussi nous assurer que la personne demandant la modification 
        //de l’objet est la propriétaire de celui-ci
        if (sauce.userId !== req.auth.userId) {
          res.status(403).json({error: 'Requête non authorisée'});
        }
        else {
        Sauce.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
            .then(() => res.status(201).json({ message : 'Sauce modifiée !'}))
            .catch((error) => res.status(400).json({error: error}));
        }
    })
};
  


//Ici on exporte un fonction appeler "deleteSauce" pour la suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id})
        .then(sauce => {
            // vérifier que celui qui fait la requête est bien le propriétaire de l'objet (sauce)
            if (sauce.userId != req.auth.userId) {
                res.status(403).json({message: 'Requête non autorisée !'});
            } else {
                //supprimer l'objet et l'image de la base de donnée
                // il faut donc récupérer l'url du fichier (grâce au "spilt" le[1] représente le nom du fichier)
                // qui est enregistrée et recrée le chemin qui est sur notre système de fichier à partir de celle-ci.
                const filename = sauce.imageUrl.split('/images/')[1];
                //package fs de Node (file system) donne accès aux fonctions qui permettent
                // modifier et supprimer des fichiers
                fs.unlink(`images/${filename}`, () => {
                    //ici gestion du callback cad créer une méthode qui va être appeler une fois
                    //que notre suppression aura eu lieu, parce que la suppression ds notre système
                    // de fichier est fait de manière asynchrone et donc maintenant 
                    // nous pouvons supprimer notre enregistrement de la base de donnée
                    Sauce.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Sauce supprimée !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };


//Ici on exporte un fonction appeler "getOneSauce" pour récupérer une sauce
exports.getOneSauce = (req, res, next) => {
    /*Méthode findOne pour trouver une sauce
    et j'y aurai accès dans l'objet suivant "params.id" qui est un paramètre de route dynamique*/
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));//erreur 404 pour objet non touvé
    
};


//Ici on exporte un fonction appeler "getAllSauces" pour récupérer toutes les sauces
exports.getAllSauces = (req, res, next) => {
    //Récupère le tableau de toutes les sauces retournées pas la base de données
    //Méthode find pour trouver toutes les sauces
    Sauce.find()
    // On les renvoie en réponse
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
};

//Boutons like et dislike
exports.likeSauce = (req, res, next) => {    
    const like = req.body.like;
     // Quand l'utilisateur ajoute un Like
    if(like === 1) {
        Sauce.updateOne({_id: req.params.id}, { $inc: { likes: 1}, $push: { usersLiked: req.body.userId}, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Vous aimez cette sauce !' }))
        .catch( error => res.status(400).json({ error}))
    
    // Quand l'utilisateur ajoute un Dislike  
    } else if(like === -1) { 
        Sauce.updateOne({_id: req.params.id}, { $inc: { dislikes: 1}, $push: { usersDisliked: req.body.userId}, _id: req.params.id })
        .then( () => res.status(200).json({ message: 'Vous n’aimez pas cette sauce !' }))
        .catch( error => res.status(400).json({ error}))

    // Modification du statut du bouton Like ou  Dislike   
    } else {    
        Sauce.findOne( {_id: req.params.id})
        .then( sauce => {
            // Quand l'utilisateur retire son Like
            if( sauce.usersLiked.indexOf(req.body.userId)!== -1){
                 Sauce.updateOne({_id: req.params.id}, { $inc: { likes: -1},$pull: { usersLiked: req.body.userId}, _id: req.params.id })
                .then( () => res.status(200).json({ message: 'Vous n’aimez plus cette sauce !' }))
                .catch( error => res.status(400).json({ error}))
                }
            // Quand l'utilisateur retire son Dislike    
            else if( sauce.usersDisliked.indexOf(req.body.userId)!== -1) {
                Sauce.updateOne( {_id: req.params.id}, { $inc: { dislikes: -1 }, $pull: { usersDisliked: req.body.userId}, _id: req.params.id})
                .then( () => res.status(200).json({ message: 'Vous aimerez peut-être cette sauce à nouveau !' }))
                .catch( error => res.status(400).json({ error}))
                }           
        })
        .catch( error => res.status(400).json({ error}))             
    }   
};