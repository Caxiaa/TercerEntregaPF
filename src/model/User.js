import mongoose from 'mongoose';

let Schema = mongoose.Schema;
export default class User{
    constructor(data){
        this.data = data;
    }
    static get model(){
        return 'Users';
    }
    static get schema(){
        return{
            email:{type:String,required:true},
            name:{type:String,required:true},
            age:{type:Number,required:true},
            address:{type:String,required:true},
            phone:{type:Number,required:true},
            password:{type:String,required:true},
            cart:[{
                type:Boolean,
                default:true
            }],
            profile_picture:String
        }
    }
}