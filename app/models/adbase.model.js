module.exports = (sequelize, Sequelize) => {
    const AdBase = sequelize.define('adbase', {
        ad_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        }
    },{
        timestamps: false
    });
    return AdBase;
}