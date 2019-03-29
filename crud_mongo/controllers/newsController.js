const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const News = require('../models/New.js');

router.get('/', (req, res, next) => {
    News.find((err, docs) => {
        if (!err) {
            res.json(docs);
        }
        else {
            res.status(500).json("err");
        }
    });
});
router.get('/:id', (req, res,next) => {
    News.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.json(doc);
        }else{
            res.status(500).json("err");
        }
    });
});
router.post('/', (req, res, next) => {
    News.create(req.body, (err, post)=> {
      if (err) res.status(500).json("err");
      res.json(post);
    });
});
router.put('/:id', (req, res, next) => {
   News.findOneAndUpdate( req.params.id, req.body, { new: true }, (err, news) => {
        if (!err) { res.json(news); }
        else {
            res.status(500).json("err");
        }
    });
});
router.delete('/delete/:id', (req, res, next) => {
    News.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json(doc);
        }
        else { res.status(500).json("err"); }
    });
});
module.exports = router;