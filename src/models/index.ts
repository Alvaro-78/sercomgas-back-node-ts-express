import { sequelize } from '../db';
import { Marketer } from './Marketers';
import { Operation } from './Operations';

Marketer.hasMany(Operation, {
	foreignKey: 'marketerId',
	sourceKey: 'id',
	as: 'operations',
});

Operation.belongsTo(Marketer, {
	foreignKey: 'marketerId',
	targetKey: 'id',
	as: 'marketer',
});


export { Marketer, Operation };
