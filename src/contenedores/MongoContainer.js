import mongoose from 'mongoose';
import config from '../config.js';

mongoose.connect(config.mongo.baseUrl,{useNewUrlParser:true,useUnifiedTopology:true});
    
export default class MongoContainer{
    constructor(collection,schema,timestamps){
        this.collection = mongoose.model(collection,new mongoose.Schema(schema,timestamps));
    }
    getAll = async()=>{
        try {
            let documents = await this.collection.find().populate();
            return {status:"success", payload: documents}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    getById = async(id)=>{
        try {
            let buscar = await this.collection.find({_id:id}).populate();
            return{status:"success",payload:buscar}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    
    save = async(body) =>{
        try {
            let result = await this.collection.create(body);
            return {status:"success", message:"creado", payload:result}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    crearCarrito = async() =>{
        try {
            let crear = await this.collection.create({});
            return {status:"success", message:"carrito creado", payload:crear}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    deleteById = async(id) =>{
        try {
            let borrar = await this.collection.deleteOne({_id: id});
            return {status:"success",messagge:"borrado correctamente"}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    editarProducto = async(id,body) =>{
        try {
            let editar = await this.collection.updateOne({_id:id},{$set:body})
            return {status:"success",messagge:"editado correctamente", payload:editar}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    agregarProductoACarrito = async(idCarrito,producto)=>{
        try {
            let result = await this.collection.updateOne({_id:idCarrito}, {$push:{products:producto}});
            return{status:"success",message:"producto agregado correctamente", payload:result}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
    borrarProductoCarrito = async (idCarrito,idProducto)=>{
        try {
            const carrito = await this.collection.updateOne({_id:idCarrito},{$pull:{products:idProducto}})
            return{status:"success",message:"Producto eliminado del carrito"}
        } catch (error) {
            return{status:"error",error:error}
        }
    }
}