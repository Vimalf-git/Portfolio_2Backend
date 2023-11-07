import express from 'express';
import mailSend from '../controller/mailController.js';
const router=express.Router();

router.post('/mailsend',mailSend);

export default router;