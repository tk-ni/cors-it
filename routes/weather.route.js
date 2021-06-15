const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req,res)=>{
    if(req.query.url){
        fetch(req.query.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(apiRes => {
            try{
                apiRes.json().then(data =>{
                    res.status(200).send(data);
                })
            }catch(e){
                res.status(500).send(e);
            }
   
        }).catch(e =>{
            console.log(e);
            res.status(500).send(e);
        })
    }else{
        res.status(500).send('No provided url found.');
    }
})

module.exports = router;