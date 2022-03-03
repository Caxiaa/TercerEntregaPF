const {default:ProductosMongo}  = await import ('./productos/productosMongo.js');
const {default:CarritoMongo} = await import ('./carrito/carritoMongo.js');
const {default:UserMongo} = await import('./user/userMongo.js')

let productos = new ProductosMongo();
let carrito = new CarritoMongo();
let user = new UserMongo();

export {productos,carrito,user}
