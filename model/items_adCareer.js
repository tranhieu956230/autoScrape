module.exports = (sequelize, DataTypes) => {
    const items_adCareer = sequelize.define('items_adCareer', {
        itemID : {
            type: DataTypes.UUID,
            allowNull: false,
        },
        adTypeID :{
            type: DataTypes.UUID,
            allowNull: false,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        
    })
    return items_adCareer;
}

