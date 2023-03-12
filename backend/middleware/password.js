//Importation du package password-validator
const passwordValidator = require('password-validator');

//création du schéma
const passwordSchema = new passwordValidator();

// Le schéma que doit respecter le mot de passe
passwordSchema
.is().min(8)                                                  // Longueur minmum 8
.is().max(100)                                               // Longueur maximum 100
.has().uppercase()                                          // Doit contenir des lettres majuscules
.has().lowercase()                                         // Doit contenir des lettres minuscules
.has().digits(1)                                          // Doit contenir au moins 2 chiffres
.has().not().spaces()                                    // Sans espace
.is().not().oneOf(['Passw0rd', 'Password123', '1234']); // Valeurs interdites


//Vérification du mot de passe
module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)){
        next();
    }else {
        return res.status(400).json({error:`Le mot de passe n'est pas assez fort ${passwordSchema.validate(req.body.password, { list: true })}`});

    }
}

