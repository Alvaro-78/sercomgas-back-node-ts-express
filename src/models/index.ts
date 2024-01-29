import sequelize from '../db';
import { Marketer } from './Marketers';
import { Operation } from './Operations';

Marketer.hasMany(Operation, {
	sourceKey: 'id',
	foreignKey: 'marketerId',
	as: 'operations',
});

Operation.belongsTo(Marketer, {
	targetKey: 'id',
	foreignKey: 'marketerId',
	as: 'marketer',
});


sequelize.sync({ force: true }).then(() => console.log('Tablas creadas'));

export { Marketer, Operation };
