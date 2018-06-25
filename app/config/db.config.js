const env = require('./env')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.host,
    dialect: env.dialect,
    pool: env.pool,
})


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.adcareer = require('../models/adcareer.model')(sequelize, Sequelize);
db.adpurpose = require('../models/adpurpose.model')(sequelize, Sequelize);
db.adtype = require('../models/adtype.model')(sequelize, Sequelize);
db.adbase = require('../models/adbase.model')(sequelize, Sequelize);
db.item = require('../models/item.model')(sequelize, Sequelize);

module.exports = db;
