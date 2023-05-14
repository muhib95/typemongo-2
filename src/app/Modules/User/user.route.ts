import  express  from "express";
import { createUser,  getUserss} from "./user.controler";
const router=express.Router();



router.get('/',getUserss);
router.post('/creat',createUser);
export default router;