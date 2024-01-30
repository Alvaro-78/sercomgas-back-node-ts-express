import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

export class Operation extends Model {
	public id!: number;
	public type!: string;
	public amount!: number;
	public price!: number;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Operation.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		type: {
			type: new DataTypes.STRING(128),
			allowNull: false,
		},
		amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		currenty_currency: {
			type: new DataTypes.STRING(10),
			allowNull: false,
		},
	},
	{
		tableName: 'operations',
		sequelize,
	}
);

