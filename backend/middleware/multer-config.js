//CRÉATION D'UN MIDDLEWARE QUI VA CONFIGURER MULTER POUR LUI EXPLIQUER
//COMMENT GÉRER LES FICHIER Où LES ENREGISTRER ET QUELS NOMS DE FICHIER LEUR DONNER
const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
}

//Création d'un  objet de configuration pour multer
// utilisation d'un fonction de muter appeler "diskStorage" pour dire qu'on va l'enregister sur le disque
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        //appel du callback (null) pour dire qu'il n'y a pas d'erreur et appel du dossier images
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        //ici on va générer le nouveau nom du fichier
        //avec "split" on va remplacer les espaces par des underscores
        const name = file.originalname.split(' ').join('_')
        //maintenant il faut appliquer une extension au fichier grâce à son mime type
        const extension = MIME_TYPES[file.mimetype]
        //appel du callback et cration du filename en entier + time stamp
        callback(null, name + Date.now() +'.' + extension);

    }


});

// Exportation de multer
// la méthode "single" indique qu'il s'agit d'un fichier image uniquement
module.exports = multer({storage}).single('image');