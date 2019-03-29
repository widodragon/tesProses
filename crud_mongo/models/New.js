const mongoose = require('mongoose');

var newSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    }
},{
	collection:'New'
});

module.exports=mongoose.model('New', newSchema);
