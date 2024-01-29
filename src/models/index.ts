import sequelize from '../db';
import { Marketer } from './Marketers';
import { Operation } from './Operations';

Operation.belongsTo(Marketer, { foreignKey: 'marketerId', as: 'marketer' });
Operation.belongsTo(Marketer, { foreignKey: 'clientId', as: 'client' });

sequelize.sync({ force: true }).then(() => console.log('Tablas creadas'));

export { Marketer, Operation };
