import { User } from "./user.model";

export const createUserDB=async()=>{
    const user =await new User({
        id:"100011111999099924566464654648889",
        role:"Student",
        password:"1234556565",
        name:{
            firstName:"Muhib",
            middleName:"Babu",
            lastName:"Hasan"
    
        },
        dateOfBirth:"31/12/1996",
        gender:"Male",
        email:"muhibbulhasan6@gmail.com",
        contactNo:"01749958965",
        Emergency:"01711443054",
        address:"Boshundhora",
        permanentAddress:"Aftab"
      
      });
    
      await user.save();
      return user;

}

export const getUserDb=async()=>{
    const users=await User.find();
    return users;

}