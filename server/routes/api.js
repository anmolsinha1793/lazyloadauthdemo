const express = require('express');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var MongoClient = require('mongodb').MongoClient;
//const db = "mongodb+srv://useradi:Callofduty@1993@cluster0.mongodb.net/admin";
const db = "mongodb://useradi:Callofduty1993@demodb-shard-00-00-exxxr.mongodb.net:27017,demodb-shard-00-01-exxxr.mongodb.net:27017,demodb-shard-00-02-exxxr.mongodb.net:27017/test?ssl=true&replicaSet=demodb-shard-0&authSource=admin&retryWrites=true";

const mongo = mongoose.connect(db, { useNewUrlParser: true });
mongo.then(() => {
    console.log('connected');
}).catch((err) => {
    console.log('err', err);
});
function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token =  req.headers.authorization.split(' ')[1]
    if(token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretkey')
    if(!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject;
    next()

}

// MongoClient.connect(db, { useNewUrlParser: true }, function (err, client) {
//     // const collection = client.db("test").collection("devices");
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('success');
//     }
// });
router.get('/',(req, res) => {
    res.send('from api route')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err,registeredUser) => {
        if (err){
            console.log(err)
        }
        else{
            let payload = {subject: registeredUser._id}
            let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token});
        }
    });
})
router.get('/',(req,res) => {
    res.send('sent from api route');
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email},(err, user) => {
        if(err){
            console.log(err)
        }
        else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                }
                else{
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token})
                }
            }
        }
    })
})
router.get('/customers', verifyToken, (req, res) => {
    let customers = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(customers)
})
router.get('/orders', (req, res) => {
    let orders = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(orders)
})

module.exports = router;