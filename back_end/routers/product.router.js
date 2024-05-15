import express from 'express';
import { CreatePRD, deleteProduct, getAll, getById } from '../controllers/product.controller.js';

const router = express.Router()

router.get('/:id', getById)
router.get('', getAll)
router.post('', CreatePRD)
router.delete('/:id', deleteProduct)

export default router