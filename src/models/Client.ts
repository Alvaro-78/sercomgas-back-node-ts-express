import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { Operation } from './Operations';

export class Client extends Model {
	public id!: number;
	public name!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Client.init(
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
		tableName: 'clients',
		sequelize,
	}
);

Client.hasMany(Operation, {
	foreignKey: 'clientId',
	sourceKey: 'id',
});

Operation.belongsTo(Client, {
	foreignKey: 'clientId',
	targetKey: 'id',
});
