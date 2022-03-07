import express from 'express';
import { passportCall } from '../utils/middlewares.js';
import { uploader } from '../services/uploader.js'
import { createTransport } from 'nodemailer';

const appPwd = "dzufbtkkrtkwekmt";
const transport = createTransport({
    service:"gmail",
    port:587,
    auth:{
        user:'santinoroide@gmail.com',
        pass: appPwd
    }
})

const router = express.Router();

router.get('/',(req,res)=>{
    res.send({message:"hola"})
})

router.post('/register',uploader.single('avatar'),passportCall('register'),(req,res)=>{
    const mail={    
        from:"Ecommerce<a>",
        to:"santiagocacciabue@hotmail.com",
        subject:"New Register",
        html:`<h1>New user:</h1></br>
        <h3>
            Email: "${req.body.email}"</br>
            Name: "${req.body.name}"</br>
            Age: "${req.body.age}"</br>
            Address: "${req.body.address}"</br>
            Phone: "${req.body.phone}"</br>
        </h3>
        `
    }
    transport.sendMail(mail);
    res.send({message:"Signed up"})
})

router.post('/login',passportCall('login'),(req,res)=>{
    res.send({message:"Logged in!"})
})

export default router;