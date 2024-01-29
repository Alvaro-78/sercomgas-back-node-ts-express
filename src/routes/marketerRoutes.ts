import { Router } from 'express';
import * as marketerController from '../controller/MarketerController';

const router = Router();

router.get('/', marketerController.getAllMarketers);
router.post('/marketers', marketerController.createMarketer);

export default router;
