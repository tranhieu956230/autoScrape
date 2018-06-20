module.exports = (sequelize, DataTypes) => {
    const items_adType = sequelize.define('items_adType', {
        itemID : {
            type: DataTypes.UUID,
            allowNull: false,
        },
        adTypeID :{
            type: DataTypes.UUID,
            allowNull: false,
        },
    },{
        timestamps: false,
        freezeTableName: true,
        
    })
    return items_adType;
}

