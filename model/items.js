module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('item', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull:false,
        },
        link:{
            type:  DataTypes.STRING,
        },
        thumb: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        postDate: {
            type: DataTypes.STRING,
        },
        link_embed: {
            type: DataTypes.TEXT,
        }

    },{
        timestamps: false,
    })
    return Item;
}

