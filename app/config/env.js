const env = {
    user: 'root',
    password: 'Hieu956230',
    database: 'test',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

module.exports = env;