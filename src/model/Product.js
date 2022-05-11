import mongoose from 'mongoose';

let Schema = mongoose.Schema();

export default class Product{
    constructor(data){
        this.data = data;
    }
    static get model(){
        return 'Products';
    }
    static get schema(){
        return{
            title:{type:String,required:true},
            description:{type:String},
            thumbnail:{type:String,required:true},
            price:{type:Number,required:true},
            stock:{type:Number,required:true},
            code:{type:String,required:true}
        }
    }
}