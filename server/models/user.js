console.log('users model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
 name: { type: String, unique: [true, 'This username is already taken.'], required: [true, 'You must fill in Name field.'], minlength: [2, 'Name must be at least 2 characters']},
}, { timestamps: true });

mongoose.model('Users', UserSchema);
