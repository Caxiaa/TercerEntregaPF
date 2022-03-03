import passport from 'passport';
import local from 'passport-local';
import {user} from './daos/index.js';
import { createHash } from './utiles.js';
import { isValidPassword } from './utiles.js';

const LocalStrategy = local.Strategy;

export const initializePassport = () =>{
    passport.use('register', new LocalStrategy({
        usernameField:"email",
        passwordField:"password",
        passReqToCallback:true
    },async(req,email,password,done)=>{
        try {
            let usuario = await user.findOne({email:email});
            if(usuario) return done(null,false);
            const newUser = {
                email:email,
                name:req.body.name,
                age:re.body.age,
                address:req.body.address,
                phone:req.body.phone,
                password:createHash(password)
            }
            console.log(newUser);
            try {
                let result = await user.save(newUser);
                return done(null,result);
            } catch (error) {
                return done(error);
            }
        } catch (error) {
            return done(error);
        }
    }))
    passport.use('login',new LocalStrategy(async(email,password,done)=>{
        try {
            let usuario = await user.findOne({email:email});
            if(!usuario) return done(null,false,{message:"Account doesnt exist"});
            if(!isValidPassword(usuario,password)) return done(null,false,{message:"Invalid password"});
            console.log("LOGUEADO");
            return done(null,usuario);
        } catch (error) {
            return done(error);
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser((id,done)=>{
        user.findById(id);
    })
}