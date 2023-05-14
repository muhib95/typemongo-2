import { Schema, model } from "mongoose";
import { Iuser } from "./user.interface";

    // schema creating
    const userSchema=new Schema<Iuser>({
        id:{
            type:String,
            required:true,
            unique:true
          
        },
        role:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            firstName:{
                type:String,
                required:true
            },
            middleName:{
                type:String
            },
            lastName:{
                type:String,
                required:true
            }
    
        },
        dateOfBirth:{
            type:String
        },
        gender:{
            type:String,
            enum:["Male","Female"]
        },
        email:{
            type:String,
    
    
        },
        contactNo:{
            type:String,
            required:true
        },
            Emergency:{
                type:String,
                required:true
            },
            address:{
                type:String,
                required:true
            },
            permanentAddress:{
                type:String,
                required:true
            }
    
    })
    
   export const User=model<Iuser>('User',userSchema);