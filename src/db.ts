import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('root', 'postgres', 'root', {
	host: 'localhost',
	dialect: 'postgres',
});
