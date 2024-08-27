// const mongoose = require('mongoose');
// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
// });

// module.exports = mongoose.model('User',userSchema);



// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('User', UserSchema);
