import User from '../model/User.js';
import GenericQueries from './genericQueries.js';

export default class UserService extends GenericQueries{
    constructor(dao){
        super(dao,User.model);
    }
    
    // addProductCart = async(id,product)=>{
    //     try {
    //         let result = await this.dao.updateOne({_id:id}, {$push:{cart:product}});
    //         return{status:"success",message:"Porduct loaded!", payload:result}
    //     } catch (error) {
    //         return{status:"error",error:error}
    //     }
    // }
}