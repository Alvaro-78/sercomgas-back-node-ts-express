import express from 'express';
import db from './db';
import marketerRouter from './routes/marketerRoutes';
import operationRouter from './routes/operationRoutes';

const app = express();
const port = 3002;

app.use(express.json());
app.use('/marketers', marketerRouter);
app.use('/operations', operationRouter);

db.authenticate()
	.then(() => {
		console.log('DB is connected');
		db.sync({ force: false })
			.then(() => {
				console.log('Tables created successfully');
				app.listen(port, () => {
					console.log(`I am ready in http://localhost:${port}`);
				});
			})
			.catch((error) => {
				console.error('Error creating tables:', error);
			});
	})
	.catch(console.error);
