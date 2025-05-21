import { Casa } from './casas.models';
import { User } from './user.models';
import { Purchase } from './purchase.models';

User.hasMany(Purchase, { foreignKey: 'userId' });
Purchase.belongsTo(User, { foreignKey: 'userId' });

Casa.hasMany(Purchase, { foreignKey: 'casaId' });
Purchase.belongsTo(Casa, { foreignKey: 'casaId' });

export { Casa, User, Purchase };