const mongoose = require('mongoose');

var newSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This field is required.'
    },
    content: {
        type: String,
        required: 'This field is required.'
    }
});

module.exports=mongoose.model('New', newSchema);
