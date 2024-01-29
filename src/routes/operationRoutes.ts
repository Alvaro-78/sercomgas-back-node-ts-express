import { Router } from 'express';
import * as operationController from '../controller/OperationController';

const router = Router();

router.get('/', operationController.getAllOperations);
router.get('/:id', operationController.getOperationById);
router.post('/', operationController.createOperation);
router.put('/:id', operationController.updateOperation);
router.delete('/:id', operationController.deleteOperation);

export default router;