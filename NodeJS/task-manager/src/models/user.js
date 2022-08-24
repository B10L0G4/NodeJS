const mongoose = require('mongoose')
const validator = require('validator')
 

const User = mongoose.model('User', {
    name: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('This Email is invalid' )
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minLength:8,
        // minLowercase:1,
        // minUppercase:1,
        // nimNumber:1,
        // minSymbols:1,
        validate(value){
                if(value.toLowerCase() == 'password'){
                    throw new Error('Password is not valid to use' )
                }  
            }
     },
    age: {
        type:Number,
        default: 0,
        validate(value){
            if(value < 0 ){
                throw new Error('Age not valid')
            }
        }
    }    
})
// const me = new User({
//     name:'Vanessa',
//     email:'van@ibm.com',
//     password : 'teste123'
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

module.exports = User