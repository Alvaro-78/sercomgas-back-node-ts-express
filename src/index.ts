import express from 'express';
import cors from 'cors';
import { sequelize } from './db';
import marketerRouter from './routes/marketerRoutes';
import operationRouter from './routes/operationRoutes';
import clientRouter from './routes/clientRoutes';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(marketerRouter);
app.use(operationRouter);
app.use(clientRouter);

app.get('/', (req, res) => {
	res.send('hola papi');
});

async function main() {
	try {
		await sequelize.sync({ force: true });
		app.listen(port, () => {
			console.log(`I am ready in http://localhost:${port}`);
		});
	} catch (error) {
		console.log('Unable to connect to the database', error);
	}
}

main();
