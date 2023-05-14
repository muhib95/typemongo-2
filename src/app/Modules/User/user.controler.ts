import { NextFunction, Request, Response } from "express";
import { createUserDB, getUserDb } from "./user.service";

export const createUser=async(req:Request, res:Response,next:NextFunction) => {
    // res.send('Hello World!')



const user=await createUserDB();

// res.send(user);

// createUser();

res.send({
    message:"Create user",
data:user
});
  }
  export const getUserss=async(req:Request,res:Response,next:NextFunction)=>{

    const getUsers=await getUserDb();
    res.send({
        data:getUsers
    });
  }