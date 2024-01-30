import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { Operation } from './Operations';

export class Marketer extends Model {
	public id!: number;
	public name!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Marketer.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
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

Marketer.hasMany(Operation, {
	foreignKey: 'marketerId',
	sourceKey: 'id',
});

Operation.belongsTo(Marketer, {
	foreignKey: 'marketerId',
	targetKey: 'id',
});
