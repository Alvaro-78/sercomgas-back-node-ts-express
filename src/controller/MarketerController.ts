import { RequestHandler } from 'express';
import { Marketer } from '../models/Marketers';

const getAllMarketers: RequestHandler = async (req, res) => {
	try {
		const marketers = await Marketer.findAll();
		return res.json(marketers);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

const createMarketer: RequestHandler = async (req, res) => {
	try {
		const newMarketer = await Marketer.create({ ...req.body });
		return res.json(newMarketer);
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

export { getAllMarketers, createMarketer };
