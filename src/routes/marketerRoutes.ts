import { Router } from 'express';
import {
	createMarketer,
	deleteMarketer,
	getAllMarketers,
	getMarketerOperations,
} from '../controller/MarketerController';

const router = Router();

router.get('/marketers', getAllMarketers);
router.get('/marketers/:id/operations', getMarketerOperations);
router.post('/marketers', createMarketer);
router.delete('/marketers/:id', deleteMarketer);

export default router;
