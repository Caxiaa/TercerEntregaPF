import MongoContainer from "../../contenedores/MongoContainer.js";

export default class ProductosMongo extends MongoContainer{
    constructor(){
        super('productos',
            {
                name:{type:String,required:true},
                price:{type:Number,required:true},
                description:{type:String},
                code:{type:String,required:true},
                stock:{type:Number,required:true},
                thumbnail:{type:String,required:true}
            },{timestamps:true}
        )
    }
}