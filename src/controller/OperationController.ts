import { Request, Response } from 'express';
import { Operations } from '../models/Operations';

export const getAllOperations = async (_req: Request, res: Response) => {
	try {
		const operations = await Operations.findAll();
		return res.json(operations);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const getOperationById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const operation = await Operations.findByPk(id);
		if (operation) {
			return res.json(operation);
		} else {
			return res.status(404).json({ error: 'Operation no encontrada' });
		}
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const createOperation = async (req: Request, res: Response) => {
	try {
		const newOperation = await Operations.create(req.body);
		return res.json(newOperation);
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

export const updateOperation = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const operation = await Operations.findByPk(id);
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

export const deleteOperation = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const deleted = await Operations.destroy({ where: { id } });
		if (deleted) {
			return res.json({ message: 'Operation eliminada' });
		} else {
			return res.status(404).json({ error: 'Operation no encontrada' });
		}
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};


