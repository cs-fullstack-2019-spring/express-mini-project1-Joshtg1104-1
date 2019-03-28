var express = require('express');
var router = express.Router();
var Superheroes = require('../models/super_registry');

/* GET home page. */

router.get('/', function (req, res, next) {
    Superheroes.find({}, (error, Superheroes) => {
        if(error){
            res.send(error)
        }
        else{
            res.render('index', {allEntries: Superheroes})
        }
    });
});

router.get('/add', (req, res) => {
    res.render('add')
});
router.post('/add', (req, res) => {
    // console.log(req.body.powers);
    Superheroes.create(req.body
    //    works a well
    //     [{
    //     id: req.body.id,
    //     name: req.body.name,
    //     'powers.intelligence': req.body["powers.intelligence"],
    //     'powers.strength': req.body['powers.strength'],
    //     'powers.speed': req.body['powers.speed'],
    //     'powers.combat': req.body['powers.combat'],
    //     'powers.wealth': req.body['powers.wealth'],
    //     image: req.body.image,
    // }]
        , (error) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect('add')
        }
    });
});
router.get('/find', (req, res) => {
   res.render('find')
});
router.get('/find', function (req,res) {
    console.log(req.body);
    Superheroes.find({id: req.query.id}, (error, results) => {
        if(error){
            res.send(error)
        }
       else{
           res.send(results)
        }
    });
});

router.get('/delete', (req, res) => {
    Superheroes.deleteOne({id:req.params.id}, (error) => {
        if(error){
            res.send(error)
        }
        else{
            res.redirect('/')
        }
    });
});

module.exports = router;
