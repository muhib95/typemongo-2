import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import userRouter from './app/Modules/User/user.route';
const app:Application = express()





app.use(cors())



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/v1/user',userRouter )


  export default app;