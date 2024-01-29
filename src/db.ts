import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('root', 'root', 'root', {
	host: 'localhost',
	dialect: 'postgres',
});
