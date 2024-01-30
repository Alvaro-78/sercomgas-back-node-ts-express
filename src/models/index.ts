import sequelize from '../db';
import { Marketers } from './Marketers';
import { Operations } from './Operations';

Marketers.hasMany(Operations, {
	sourceKey: 'id',
	foreignKey: 'marketerId',
	as: 'operations',
});

Operations.belongsTo(Marketers, {
	targetKey: 'id',
	foreignKey: 'marketerId',
	as: 'marketer',
});

sequelize.sync({ force: true }).then(() => console.log('Tablas creadas'));

export { Marketers, Operations };
