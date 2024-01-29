import { Router } from 'express';
import * as operationController from '../controller/OperationController';

const router = Router();

router.get('/', operationController.getAllOperations);
router.get('/operations/:id', operationController.getOperationById);
router.post('/operations', operationController.createOperation);
router.put('/operations/:id', operationController.updateOperation);
router.delete('/operations/:id', operationController.deleteOperation);

export default router;
