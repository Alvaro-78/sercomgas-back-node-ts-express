import { Router } from 'express';
import {
	createClient,
	deleteClient,
	getAllClients,
} from '../controller/ClientController';

const router = Router();

router.get('/client', getAllClients);
router.post('/client', createClient);
router.delete('/client/:id', deleteClient);

export default router;
