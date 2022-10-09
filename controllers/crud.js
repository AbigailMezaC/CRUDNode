const conexion = require('../database/db');

exports.save = (req, res)=>{
    const nom = req.body.nom;
    const aut = req.body.aut;
    const gen = req.body.gen;
    conexion.query('insert into canciones set ?',{nom:nom, aut:aut, gen:gen}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

exports.update = (req, res)=>{
    const id = req.body.id;
    const nom = req.body.nom;
    const aut = req.body.aut;
    const gen = req.body.gen;
    conexion.query('update canciones set ? where id = ?',[{nom:nom, aut:aut, gen:gen}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}