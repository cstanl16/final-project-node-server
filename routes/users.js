const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {

    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
        
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({username, password});

    newUser.save()
        .then(() => res.json('User: ' + username + ' has been added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete((req, res) => {
    const username = req.body.username;
    //const password = req.body.password;

    const user = new User({username});

    user.delete()
        .then(() => res.json('User: ' + username + ' has been deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;