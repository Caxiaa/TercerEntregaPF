import express from 'express';
import {carrito} from '../daos/index.js';
const router = express.Router();

//GETS
router.get('/',(req,res)=>{
    carrito.getAll().then(result=>{
        res.send(result);
    })
})

router.get('/:uid/productos',(req,res)=>{
    let id = req.params.uid;
    carrito.getById(id).then(result=>{
        res.send(result);
    })
})

//POSTS
router.post('/',(req,res)=>{
    carrito.crearCarrito().then(result=>{
        res.send(result);
    })
})

router.post('/:uid/productos',(req,res)=>{
    let id = req.params.uid;
    let producto = req.body;
    carrito.agregarProductoACarrito(id,producto).then(result=>{
        res.send(result);   
    })
})

//DELETES
router.delete('/:uid',(req,res)=>{
    let id = req.params.uid;
    carrito.deleteById(id).then(result=>{
        res.send(result);
    })
})

router.delete('/:uid/productos/:id_prod',(req,res)=>{
    let idCarrito = req.params.uid;
    let idProd = req.params.id_prod;
    carrito.borrarProductoCarrito(idCarrito,idProd).then(result=>{
        res.send(result);
    })
})
export default router;