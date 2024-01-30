import { Request, Response } from 'express';
import { Operation } from '../models/Operations';

const getAllOperations = async (_req: Request, res: Response) => {
	try {
		const operations = await Operation.findAll();
		return res.json(operations);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

const getOperationById = async (req: Request, res: Response) => {
	const id = req.params.id;
	try {
		const operation = await Operation.findOne({
			where: { id },
		});
		if (operation) {
			return res.json(operation);
		} else {
			return res.status(404).json({ error: 'Operation not found' });
		}
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

const createOperation = async (req: Request, res: Response) => {
	const { marketerId, type, amount, price, currenty_currency } = req.body;
	try {
		const newOperation = await Operation.create({
			marketerId,
			type,
			amount,
			price,
			currenty_currency,
		});
		return res.json(newOperation);
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

const updateOperation = async (req: Request, res: Response) => {
	const id = req.params.id;
	try {
		const operation = await Operation.findByPk(id);
		if (operation) {
			await operation.update(req.body);
			return res.json(operation);
		} else {
			return res.status(404).json({ error: 'Operation no encontrada' });
		}
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

const deleteOperation = async (req: Request, res: Response) => {
	const id = req.params.id;
	try {
		const deleted = await Operation.destroy({ where: { id } });
		if (deleted) {
			return res.json({ message: 'Operation eliminada' });
		} else {
			return res.status(404).json({ error: 'Operation no encontrada' });
		}
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export {
	getAllOperations,
	getOperationById,
	createOperation,
	updateOperation,
	deleteOperation,
};
