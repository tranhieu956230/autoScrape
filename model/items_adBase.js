module.exports = (sequelize, DataTypes) => {
    const items_adBase = sequelize.define('items_adBase', {
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
    return items_adBase;
}

