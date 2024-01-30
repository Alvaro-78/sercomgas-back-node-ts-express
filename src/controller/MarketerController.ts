import { RequestHandler } from 'express';
import { Marketers } from '../models/Marketers';

export const getAllMarketers: RequestHandler = async (req, res) => {
	try {
		const marketers = await Marketers.findAll();
		return res.json(marketers);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const createMarketer: RequestHandler = async (req, res) => {
		const { name } = req.body;
		try {
			const existingMarketer = await Marketers.findOne({ where: { name } });

			if (existingMarketer) {
				return res.status(400).json({
					message: 'Un marketer ya existe con ese nombre',
				});
			}
			const newMarketer = await Marketers.create({ name });
			return res.json(newMarketer);
		} catch (e: any) {
			return res.status(400).json({ error: e.message });
		}
};

export const deleteMarketer: RequestHandler = async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await Marketers.destroy({ where: { id } });
		if (deleted) {
			return res.json({ message: 'Marketer eliminado' });
		} else {
			return res.status(404).json({ error: 'Marketer no encontrado' });
		}
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

