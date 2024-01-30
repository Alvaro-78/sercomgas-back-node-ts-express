// Marketers.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

export class Marketers extends Model {
	public id!: number;
	public name!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Marketers.init(
	{
		name: {
			type: new DataTypes.STRING(128),
			allowNull: false,
		},
	},
	{
		tableName: 'marketers',
		sequelize,
	}
);
