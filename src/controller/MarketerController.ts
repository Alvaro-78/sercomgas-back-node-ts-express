import { RequestHandler } from 'express';
import { Marketer } from '../models/Marketers';

export const getAllMarketers: RequestHandler = async (req, res) => {
	try {
		const marketers = await Marketer.findAll();
		return res.json(marketers);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const createMarketer: RequestHandler = async (req, res) => {
	try {
		const newMarketer = await Marketer.create({ ...req.body });
		return res.json(newMarketer);
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

export const deleteMarketer: RequestHandler = async (req, res) => {
	try {
		const id = req.params.id;
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

