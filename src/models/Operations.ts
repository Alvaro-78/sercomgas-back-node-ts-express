import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import { Marketers } from './Marketers';
// import { Clients } from './Clients ';

export class Operations extends Model {
	public marketerId!: number;
	public clientId!: number;
	public type!: string;
	public amount!: number;
	public price!: number;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Operations.init(
	{
		marketerId: {
			type: DataTypes.INTEGER,
			references: {
				model: Marketers,
				key: 'id',
			},
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
