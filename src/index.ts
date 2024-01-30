import express from 'express';
import cors from 'cors';
import db from './db';
import marketerRoutes from './routes/marketerRoutes';
import operationRoutes from './routes/operationRoutes';
// import clientRoutes from './routes/clientRoutes';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(marketerRoutes);
app.use(operationRoutes);
// app.use(clientRoutes);



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
