const Sequelize = require('sequelize');
//local database 
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }

})

//Models
const Item = require('./model/items')(sequelize, Sequelize);
const adcareer = require('./model/items_adCareer')(sequelize, Sequelize);
const adpurpose = require('./model/items_adPurpose')(sequelize, Sequelize);
const adtype = require('./model/items_adType')(sequelize, Sequelize);
const adbase = require('./model/items_adBase')(sequelize, Sequelize);

//module
const getData = require('./getData');

//global arrays
var itemsArr = [];
var items_adBaseArr = [];
var items_adCareerArr = [];
var items_adPurposeArr = [];
var items_adTypeArr = [];

async function makeObject(data) {

    let adbases = ["image", "embed"];
    let adtypes = [57, 5, 30, 7, 16, 17, 25];
    let adpurposes = [4, 11, 12];
    let adcareers = [3, 8, 10, 22, 9, 23, 10, 14, 15, 31, 18, 19, 24];

    itemsArr = data;
    items_adBaseArr = data.map(item => {
        return Object.assign({
            id: 'default',
            itemID: item.id,
            adTypeID: adbases.indexOf(item.adBase) + 1,
        })
    })
    items_adPurposeArr = data.map(item => {
        return Object.assign({
            id: 'default',
            itemID: item.id,
            adTypeID: adpurposes.indexOf(item.adPurpose) + 1,
        })
    })
    items_adTypeArr = data.map(item => {
        return Object.assign({
            id: 'default',
            itemID: item.id,
            adTypeID: adtypes.indexOf(item.adType) + 1,
        })
    })
    items_adCareerArr = data.map(item => {
        return Object.assign({
            id: 'default',
            itemID: item.id,
            adTypeID: adcareers.indexOf(item.adCareer) + 1,
        })
    })

}
async function main() {
    const data = await getData();
    await makeObject(data);

    sequelize.sync({
            force: true
        })
        .then(() => {
            Item.bulkCreate(itemsArr)
                .then(() => {
                    console.log("create success");
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .then(() => {
            adcareer.bulkCreate(items_adCareerArr)
                .then(() => {
                    console.log("adcareer created");
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .then(() => {
            adpurpose.bulkCreate(items_adPurposeArr)
                .then(() => {
                    console.log("adPurpose created");
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .then(() => {
            adtype.bulkCreate(items_adTypeArr)
                .then(() => {
                    console.log("adtype created");
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .then(() => {
            adbase.bulkCreate(items_adBaseArr)
                .then(() => {
                    console.log("adbase created");
                })
                .catch(err => {
                    console.log(err);
                })
        })

}

main();
