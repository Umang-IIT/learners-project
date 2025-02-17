const  express = require('express');
const router = express.Router();

router.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/api', (req , res) =>{
    res.send({text : "server is up and running"});
});

module.exports = router;