import { config } from './config/config';

import { Sequelize } from 'sequelize';

interface Config {
	database: string;
	username: string;
	password: string;
	host: string;
	port: string;
}

const dbConfig: Config = config.development;

const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password,
	{
		host: dbConfig.host,
		dialect: 'postgres',
		port: parseInt(dbConfig.port, 10),
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

export default sequelize;
