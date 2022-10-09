const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/', (req, res)=>{  
    conexion.query('select * from canciones', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    });
});

router.get('/create.ejs', (req, res)=>{
    res.render('create.ejs');
})

router.get('/edit.ejs/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('select * from canciones where id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {canciones:results[0]});
        }
    })
})

router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('delete from canciones where id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save); 
router.post('/update', crud.update); 

module.exports = router;
