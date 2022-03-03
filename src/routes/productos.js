import express from 'express';
import {productos} from '../daos/index.js';
const router = express.Router();

//GETS
router.get('/',(req,res)=>{
    productos.getAll().then(result=>{
        res.send(result);   
    })
})

router.get('/:uid',(req,res)=>{
    let id = req.params.uid;
   productos.getById(id).then(result=>{
        console.log(result);
        res.send(result);
    })
})
//POSTS
router.post('/',(req,res)=>{
    let producto = req.body;
    if(req.auth)
    productos.save(producto).then(result=>{
        res.send(result);
    })
})

//PUTS
router.put('/:uid',(req,res)=>{
    let id = req.params.uid;
    let producto = req.body;
    if(req.auth)
    productos.editarProducto(id, producto).then(result=>{
        res.send(result);
    })
})

//DELETES 
router.delete('/:uid',(req,res)=>{
    let id = req.params.uid;
    if(req.auth)
    productos.deleteById(id).then(result=>{
        res.send(result);
    })
})


export default router;

