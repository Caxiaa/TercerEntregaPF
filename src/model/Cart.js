import mongoose from 'mongoose';
import Schema from 'mongoose';

export default class Cart{
    constructor(data){
        this.data = data;
    }
    static get model(){
        return 'Carts';
    }
    static get schema(){
        return{
            products:{
                type:[{
                    type:Schema.Types.ObjectId,
                    ref:'Products'
                }]
            }
        }
    }
}