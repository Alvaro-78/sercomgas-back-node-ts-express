import { Router } from 'express';
import {
	getAllMarketers,
	createMarketer,
	deleteMarketer,
} from '../controller/MarketerController';

const router = Router();

router.get('/marketers', getAllMarketers);
router.post('/marketers', createMarketer);
router.delete('/marketers/:id', deleteMarketer);

export default router;
