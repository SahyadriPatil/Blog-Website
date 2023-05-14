import express  from "express";
import { signupuser,loginuser } from "../controller/user-controller.js";
import { uploadImage } from "../controller/image-controller.js";
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/signup',signupuser);
router.post('/login',loginuser);
router.post('/file/upload', upload.single('file'), uploadImage);
export default router;