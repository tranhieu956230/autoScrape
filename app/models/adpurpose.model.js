module.exports = (sequelize, Sequelize) => {
    const AdPurpose = sequelize.define('adpurpose', {
        adId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        }
    },{
        timestamps: false,
    });
    return AdPurpose;
}