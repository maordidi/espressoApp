var express = require('express');
var router = express.Router();
var mysql= require('mysql');

router.post('/', function(req, res, next) {
    var id=req.body.id;
    var name=req.body.name;
    var colorid=req.body.colorid;
    var number=req.body.number;

    req.getConnection(function(error, conn) {
        conn.query("UPDATE capsules SET name=?,colorId=?,number=? WHERE id=? ",
        [name,colorid,number,id],function(err, rows, fields) {
            if (err) 
            {
                console.log(err);
                res.send({'success':false,'message':'Could not insert task to DB'});
            }
            else 
            {  
                ret = JSON.stringify(rows);
                res.send(ret);
            }
        })})});
module.exports = router;
