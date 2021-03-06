module.exports = (sequelize, Sequelize) => {
    const AdType = sequelize.define("adtype", {
        ad_id: {
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
    return AdType;
}