import { RequestHandler } from 'express';
import { Client } from '../models/Client';

export const getAllClients: RequestHandler = async (req, res) => {
	try {
		const clients = await Client.findAll();
		return res.json(clients);
	} catch (e: any) {
		return res.status(500).json({ error: e.message });
	}
};

export const createClient: RequestHandler = async (req, res) => {
	const { name } = req.body;
	try {
		const existingClient = await Client.findOne({ where: { name } });

		if (existingClient) {
			return res.status(400).json({
				message: 'Ya existe un cliente con ese nombre',
			});
		}
		const newClient = await Client.create({ name });
		return res.json(newClient);
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};

export const deleteClient: RequestHandler = async (req, res) => {
	const id = req.params.id;
	try {
		const deleted = await Client.destroy({ where: { id } });
		if (deleted) {
			return res.json({ message: 'cliente eliminado' });
		} else {
			return res.status(404).json({ error: 'cliente no encontrado' });
		}
	} catch (e: any) {
		return res.status(400).json({ error: e.message });
	}
};
