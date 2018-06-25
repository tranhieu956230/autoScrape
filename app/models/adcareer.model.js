module.exports = (sequelize, Sequelize) => {
    const AdCareer = sequelize.define('adcareer', {
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
    return AdCareer;
}