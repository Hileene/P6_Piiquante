//CRÉATION DU MIDDLEWARE D'AUTHENTIFICATION POUR VÉRIFIER QUE L'UTILISATEUR EST BIEN CONNECTÉ
//ET POUR TRANSMETTRE LES  INFOS DE CONNNEXTION AU DIFFÉRENTES MÉTHODES QUI VONT GÉRER LES REQUÊTES

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //Ici on récupère le header et on va le diviser pour la chaîne de caractère soit un tableau
        //autour de l'espace de notre mot-clé "BEARER" et de notre token([1])
        const token = req.headers.authorization.split(' ')[1];
        //decodage du token
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        //récupération du userId
        const userId = decodedToken.userId;
        //on rajoute cette valeur à l'ojet request qui lui est transmis aux routes qui vont être appelées par la suite
        req.auth = {
            userId: userId,
        };
        next();

    } catch(error) {
        res.status(401).json({ error });

    }

};