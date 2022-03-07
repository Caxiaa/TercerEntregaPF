import config from './config.js';
import passport from 'passport';
import local from 'passport-local';
import { userService } from './services/services.js';
import { createHash,isValidPassword } from './utiles.js';

const LocalStrategy = local.Strategy;

const initializePassport = () =>{
    passport.use('register', new LocalStrategy({
        usernameField:"email",
        passwordField:"password",
        passReqToCallback:true,
        session:false
    },async(req,email,password,done)=>{
        let {name,age,address,phone} = req.body;
        try {
            let user = await userService.getBy({email:email});
            if(user) return done(null,false,{message:"User already exists!"});
            const newUser = {
                email,
                name,
                age,
                address,
                phone,
                password:createHash(password),
                avatar: req.file.path,
                cart:[],
                role:"user"
            }
            let result = await userService.save(newUser);

            return done(null,result);
        } catch (error) {
            console.log(error);
            return done(error);
        }
    }))
    passport.use('login',new LocalStrategy({usernameField:"email"},async(username,password,done)=>{
        try {
            if(username===config.session.ADMIN||password===config.session.PASSWORD){
                return done(null,{id:0,role:"admin"})
            }
            const user = await userService.getBy({email:username});
            if(!user) return done(null,false,{message:"Email not found"});
            if(!isValidPassword(user,password)) return done(null,false,{message:"Incorrect password!"});
            return done(null,user)
        } catch (error) {
            console.log(error);
            return done(error);
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null,user._id);
    })
    passport.deserializeUser(async(id,done)=>{
        let result = await userService.getBy({_id:id})
        done(null,result);
    })

}

export default initializePassport;