import express from 'express';
import {
  createKhata,
  getAllKhatas,
  deleteKhata,
  updateKhata,
} from '../controllers/khata.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create and Get All
router.post('/', verifyToken, createKhata);
router.get('/', verifyToken, getAllKhatas);

// ✅ Add these two:
router.delete('/:id', verifyToken, deleteKhata);
router.put('/:id', verifyToken, updateKhata);

export default router;
