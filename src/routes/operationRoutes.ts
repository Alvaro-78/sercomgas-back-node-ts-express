import { getAllMarketers } from './../controller/MarketerController';
import { Router } from 'express';
import {
	getAllOperations,
	getOperationById,
	createOperation,
	updateOperation,
	deleteOperation,
} from '../controller/OperationController';

const router = Router();

router.get('/operations', getAllOperations);
router.get('/operations/:id', getOperationById);
router.post('/operations', createOperation);
router.put('/operations/:id', updateOperation);
router.delete('/operations/:id', deleteOperation);

export default router;
