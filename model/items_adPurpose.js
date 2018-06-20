module.exports = (sequelize, DataTypes) => {
    const items_adPurpose = sequelize.define('items_adPurpose', {
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
    return items_adPurpose;
}

