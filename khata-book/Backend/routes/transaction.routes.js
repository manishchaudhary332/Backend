import express from 'express';
import {
  addTransaction,
  getTransactionsByKhata,
  updateTransaction,
  deleteTransaction
} from '../controllers/transaction.controller.js';

import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create
router.post('/', verifyToken, addTransaction);

// Read
router.get('/:khataId', verifyToken, getTransactionsByKhata);

// Update
router.put('/:id', verifyToken, updateTransaction);
router.delete('/:id', verifyToken, deleteTransaction);


export default router;
