import express from 'express';
import cors from 'cors';
import { sequelize } from './db';
import marketerRouter from './routes/marketerRoutes';
import operationRouter from './routes/operationRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(marketerRouter);
app.use(operationRouter);

app.get('/', (req, res) => {
	res.send('hola papi');
});

async function main() {
	try {
		await sequelize.sync({ force: false });
		app.listen(port, () => {
			console.log(`I am ready in http://localhost:${port}`);
		});
	} catch (error) {
		console.log('Unable to connect to the database', error);
	}
}

main();
