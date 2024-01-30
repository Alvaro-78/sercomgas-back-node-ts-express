// import { RequestHandler } from 'express';
// import { Clients } from '../models/Clients ';

// export const getClients: RequestHandler = async (req, res) => {
// 	try {
// 		const clients = await Clients.findAll({});
// 		res.json(clients);
// 	} catch (e: any) {
// 		res.status(500).json({
// 			message: e.message,
// 		});
// 	}
// };

// export const createClient: RequestHandler = async (req, res) => {
// 	const { name } = req.body;
// 	try {
// 		const existingClient = await Clients.findOne({ where: { name } });

// 		if (existingClient) {
// 			return res.status(400).json({
// 				message: 'Un cliente ya existe con ese nombre',
// 			});
// 		}
// 		const newClient = await Clients.create({ name });
// 		return res.json(newClient);
// 	} catch (e: any) {
// 		res.status(400).json({
// 			message: e.message,
// 		});
// 	}
// 	res.json('received');
// };

// export const deleteClient: RequestHandler = async (req, res) => {
// 	try {
// 		const id = req.params.id;
// 		const deleted = await Clients.destroy({ where: { id } });
// 		if (deleted) {
// 			return res.json({ message: 'Cliente eliminado' });
// 		} else {
// 			return res.status(404).json({ error: 'Cliente no encontrado' });
// 		}
// 	} catch (e: any) {
// 		return res.status(400).json({ error: e.message });
// 	}
// };
