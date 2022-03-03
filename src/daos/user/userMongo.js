import MongoContainer from "../../contenedores/MongoContainer.js";

export default class UserMongo extends MongoContainer{
    constructor(){
        super('user',
            {
                email:{type:String,required:true},
                name:{type:String,required:true},
                age:{type:Number,required:true},
                address:{type:String,required:true},
                phone:{type:Number,required:true},
                password:{type:String,required:true}
            },{timestamps:true}
        )
    }
}