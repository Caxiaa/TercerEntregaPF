import express from 'express';
import {cartService} from '../services/services.js';
import cartControllers from '../controllers/cartControllers.js';
const router = express.Router();

//GETS
router.get('/:uid',cartControllers.getCart);

//POSTS
router.post('/',cartControllers.generateCart);
router.post('/:uid',cartControllers.addProductCart);

//DELETES
router.delete('/:uid/:id_prod',cartControllers.deleteProductCart);
router.delete('/:uid',cartControllers.deleteCart);

export default router;