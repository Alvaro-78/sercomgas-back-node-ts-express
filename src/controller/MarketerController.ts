import { RequestHandler } from 'express';
import { Marketer } from '../models/Marketers';
import { Operation } from '../models/Operations';

export const getAllMarketers: RequestHandler = async (req, res) => {
	try {
		const marketers = await Marketer.findAll();
		return res.json(marketers);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const getMarketerOperations: RequestHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const marketerOperations = await Operation.findAll({
			where: { marketerId: id },
		});
		return res.json(marketerOperations);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const createMarketer: RequestHandler = async (req, res) => {
	const { name } = req.body;
	try {
		const existingMarketer = await Marketer.findOne({ where: { name } });

		if (existingMarketer) {
			return res.status(400).json({
				message: 'Ya existe un Marketer con ese nombre',
			});
		}
		const newMarketer = await Marketer.create({ name });
		return res.json(newMarketer);
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

export const deleteMarketer: RequestHandler = async (req, res) => {
	const id = req.params.id;
	try {
		const deleted = await Marketer.destroy({ where: { id } });
		if (deleted) {
			return res.json({ message: 'Marketer eliminado' });
		} else {
			return res.status(404).json({ error: 'Marketer no encontrado' });
		}
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

