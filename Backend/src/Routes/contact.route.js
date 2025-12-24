import express from 'express';
import { sendContact } from '../Controllers/contact.controller.js';

const router = express.Router();


router.post('/contact', sendContact);

export default router;
