import { cartService } from "../services/services.js";
import twilio from 'twilio';
import logger from "../utils/logger.js";

const getCart = async(req,res)=>{
    try {
        let id = req.params.uid;
        cartService.getBy({_id:id}).then(result=>{
            res.send({status:"success",payload:result});
        })
    } catch (error) {
        logger.error(error);
        res.send({status:"error",error:error});
    }
}

const generateCart = async(req,res)=>{
    try {
        cartService.save().then(result=>{
            res.send({status:"success",payload:result});
        })
    } catch (error) {
        logger.error(error);
        res.send({status:"error",error:error});
    }
}

const addProductCart = async(req,res)=>{
    try {
        let id = req.params.uid;
        let id_prod = req.body._id;
        cartService.addProductCart(id,id_prod).then(result=>{
            res.send({status:"success",message:"Product added in cart"});   
        })
    } catch (error) {
        logger.error(error);
        res.send({status:"error",error:error});
    }
}



const deleteCart = async(req,res)=>{
    try {
        let id = req.params.id;
        cartService.delete(id).then(result=>{
            res.send({status:"success",message:"Cart deleted"})
        })
    } catch (error) {
        logger.error(error);
        res.send({status:"error",error:error});
    }
}

const deleteProductCart = async(req,res)=>{
    try {
        let idCart = req.params.uid;
        let idProduct = req.params.id_prod;
        cartService.removeProductCart(idCart,idProduct).then(result=>{
            res.send({status:"success",message:"Product deleted"});
        })
    } catch (error) {
        logger.error(error);
        res.send({status:"error",error:error});   
    }
}

export default{
    getCart,
    generateCart,
    addProductCart,
    deleteProductCart,
    deleteCart
}