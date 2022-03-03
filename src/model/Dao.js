import mongoose from 'mongoose';
import User from './User.js';

export default class Dao{
    constructor(config){
        this.mongoose = mongoose.connect(config.url,{useNewUrlParser:true}).catch(error=>{
            console.log(error);
            process.exit();
        })
        
    }
}