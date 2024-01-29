import { Router } from 'express';
import {
	createMarketer,
	deleteMarketer,
	getAllMarketers,
} from '../controller/MarketerController';

const router = Router();

router.get('/', getAllMarketers);
router.post('/marketers', createMarketer);
router.delete('/marketers/:id', deleteMarketer);

export default router;
