const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const News = mongoose.model('New');

router.get('/', (req, res) => {
    News.find((err, docs) => {
        if (!err) {
            res.json(docs);
        }
        else {
            console.log('Error in retrieving news list :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.json(doc);
        }
    });
});

router.post('/', (req, res) => {
    var news = new News();
    news.title = req.body.title;
    news.content = req.body.content;
    News.save((err, doc) => {
        if (!err) {
            res.json(doc);
        }
        else {
            console.log('Error during record insertion news :' + err);
        }
    });
});

router.put('/:id', (req, res) => {
   News.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, news) => {
        if (!err) { res.json(news); }
        else {
                console.log('Error during record update : ' + err);
        }
    });
});


// function handleValidationError(err, body) {
//     for (field in err.errors) {
//         switch (err.errors[field].path) {
//             case 'fullName':
//                 body['fullNameError'] = err.errors[field].message;
//                 break;
//             case 'email':
//                 body['emailError'] = err.errors[field].message;
//                 break;
//             default:
//                 break;
//         }
//     }
// }


router.get('/delete/:id', (req, res) => {
    News.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json(doc);
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;