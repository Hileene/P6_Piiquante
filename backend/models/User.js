const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

// On rajoute mongoose-unique-validator comme plugin à notre schéma
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true }, //pour ne pas s'inscrire plusieurs fois avec la même adresse email
    password: { type: String, required: true },
});

userSchema.plugin(mongodbErrorHandler);
//On va appliquer le validator au schéma avant d'en faire un model
// on va appeler la méthode plugin
userSchema.plugin(uniqueValidator);

// On exporte ce schéma sous forme de model
module.exports = mongoose.model('User', userSchema);