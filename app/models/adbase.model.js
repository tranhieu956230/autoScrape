module.exports = (sequelize, Sequelize) => {
    const AdBase = sequelize.define('adbase', {
        adId: {
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