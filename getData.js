var request = require("request");
const fs = require('fs');

var arr = [];

function getData(adPage, adCareer, adPurpose, adType, adBase) {
    var options = {
        method: 'POST',
        url: 'https://www.mauquangcao.com/',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'postman-token': '953cc6dd-a091-5196-e2df-1c397e39eddd',
            'cache-control': 'no-cache',
            'x-requested-with': 'xmlhttprequest'
        },
        form: {
            adPage: adPage,
            adCareer: adCareer,
            adPurpose: adPurpose,
            adType: adType,
            adBase: adBase,
        }
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) reject(error);
            resolve(JSON.parse(body));
        })
    })
}

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('out.json', JSON.stringify(data), function (err) {
            if (err) reject(err);
            resolve(console.log("write to file completed"));
        })
    })
}

async function getAdData(arr) {
    var id = 1;
    do {
        var response = await getData(id, 0, 0, 0, 0);
        for (let i = 0; i < response.items.length; i++) {
            arr.push(response.items[i]);
        }
        console.log(id);
        id++;
    } while (response.items.length != 0);
}

function modifyItem(type, typeID, id, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            switch (type) {
                case "adCareer":
                    arr[i] = Object.assign(arr[i], {
                        adCareer: typeID
                    })
                    break;
                case "adPurpose":
                    arr[i] = Object.assign(arr[i], {
                        adPurpose: typeID
                    })
                    break;
                case "adType":
                    arr[i] = Object.assign(arr[i], {
                        adType: typeID
                    })
                    break;
                case "adBase":
                    arr[i] = Object.assign(arr[i], {
                        adBase: typeID
                    })
                    break;
            }
        }
    }
}

async function getAdCareerData(arr) {
    var adcareers = [3, 8, 10, 22, 9, 23, 10, 14, 15, 31, 18, 19, 24];
    for (let j = 0; j < adcareers.length; j++) {
        var id = 1;
        do {
            var response = await getData(id, adcareers[j], 0, 0, 0);
            for (let i = 0; i < response.items.length; i++) {
                modifyItem("adCareer", adcareers[j], response.items[i].id, arr);
            }
            console.log('adCareer', id);
            id++;

        } while (response.items.length != 0);
    }
}
async function getAdPurposeData(arr) {
    var adpurposes = [4, 11, 12];
    for (let j = 0; j < adpurposes.length; j++) {
        var id = 1;
        do {
            var response = await getData(id, 0, adpurposes[j], 0, 0);
            for (let i = 0; i < response.items.length; i++) {
                modifyItem("adPurpose", adpurposes[j], response.items[i].id, arr);
            }
            console.log('adPurpose', id);
            id++;

        } while (response.items.length != 0);
    }
}
async function getAdTypeData(arr) {
    var adtypes = [57, 5, 30, 7, 16, 17, 25];
    for (let j = 0; j < adtypes.length; j++) {
        var id = 1;
        do {
            var response = await getData(id, 0, 0, adtypes[j], 0);
            for (let i = 0; i < response.items.length; i++) {
                modifyItem("adType", adtypes[j], response.items[i].id, arr);
            }
            console.log('adType', id);
            id++;

        } while (response.items.length != 0);
    }
}
async function getAdBaseData(arr) {
    var adbases = ["image", "embed"];
    for (let j = 0; j < adbases.length; j++) {

        var id = 1;
        do {
            var response = await getData(id, 0, 0, 0, adbases[j]);
            for (let i = 0; i < response.items.length; i++) {
                modifyItem("adBase", adbases[j], response.items[i].id, arr);
            }
            console.log('adBase', id);
            id++;

        } while (response.items.length != 0);
    }
}



async function main() {
    await getAdData(arr);
    await getAdCareerData(arr);
    await getAdPurposeData(arr);
    await getAdTypeData(arr);
    await getAdBaseData(arr);
    await writeToFile(arr);
    return arr;
}

module.exports = main;