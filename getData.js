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

function findById(id, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id) return i;
    }
    return -1;
}
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('out.json', JSON.stringify(data), function (err) {
            if (err) reject(err);
            resolve(console.log("write to file completed"));
        })
    })
}
function readFromFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('out.json', (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
        })
    })
}

async function getAdCareerData(arr) {
    var adcareers = [3, 8, 10, 22, 9, 23, 10, 14, 15, 31, 18, 19, 24];
    for (let j = 0; j < adcareers.length; j++) {
        var id = 1;
        while (1) {
            var response = await getData(id, adcareers[j], 0, 0, 0);
            if (response.items.length == 0) break;
            for (let i = 0; i < response.items.length; i++) {
                var tmp = response.items[i];
                tmp = Object.assign(tmp, {
                    adCareer: [],
                    adPurpose: [],
                    adType: [],
                    adBase: [],
                })
                var index = findById(tmp.id, arr);
                if (index == -1) {
                    tmp.adCareer.push(adcareers[j]);
                    arr.push(tmp);
                }
                else {
                    if (arr[index].adCareer.indexOf(adcareers[j]) == -1) arr[index].adCareer.push(adcareers[j]);
                }
            }
            console.log('adCareer', id);
            id++;

        }
    }
}
async function getAdPurposeData(arr) {
    var adpurposes = [4, 11, 12];
    for (let j = 0; j < adpurposes.length; j++) {
        var id = 1;
        while (1) {
            var response = await getData(id, 0, adpurposes[j], 0, 0);
            if (response.items.length == 0) break;
            for (let i = 0; i < response.items.length; i++) {
                var tmp = response.items[i];
                tmp = Object.assign(tmp, {
                    adCareer: [],
                    adPurpose: [],
                    adType: [],
                    adBase: [],
                })
                var index = findById(tmp.id, arr);
                if (index == -1) {
                    tmp.adPurpose.push(adpurposes[j]);
                    arr.push(tmp);
                }
                else {
                    if (arr[index].adPurpose.indexOf(adpurposes[j]) == -1) arr[index].adPurpose.push(adpurposes[j]);
                }
            }
            console.log('adPurpose', id);
            id++;

        }
    }
}
async function getAdTypeData(arr) {
    var adtypes = [57, 5, 30, 7, 16, 17, 25];
    for (let j = 0; j < adtypes.length; j++) {
        var id = 1;
        while (1) {
            var response = await getData(id, 0, 0, adtypes[j], 0);
            if (response.items.length == 0) break;
            for (let i = 0; i < response.items.length; i++) {
                var tmp = response.items[i];
                tmp = Object.assign(tmp, {
                    adCareer: [],
                    adPurpose: [],
                    adType: [],
                    adBase: [],
                })
                var index = findById(tmp.id, arr);
                if (index == -1) {
                    tmp.adType.push(adtypes[j]);
                    arr.push(tmp);
                }
                else {
                    if (arr[index].adType.indexOf(adtypes[j]) == -1) arr[index].adType.push(adtypes[j]);
                }
            }
            console.log('adType', id);
            id++;

        }
    }
}
async function getAdBaseData(arr) {
    var adbases = ["image", "embed"];
    for (let j = 0; j < adbases.length; j++) {

        var id = 1;
        while (1) {
            var response = await getData(id, 0, 0, 0, adbases[j]);
            if (response.items.length == 0) break;
            for (let i = 0; i < response.items.length; i++) {
                var tmp = response.items[i];
                tmp = Object.assign(tmp, {
                    adCareer: [],
                    adPurpose: [],
                    adType: [],
                    adBase: [],
                })
                var index = findById(tmp.id, arr);
                if (index == -1) {
                    tmp.adBase.push(adbases[j]);
                    arr.push(tmp);
                }
                else {
                    if (arr[index].adBase.indexOf(adbases[j]) == -1) arr[index].adBase.push(adbases[j]);
                }
            }
            console.log('adBase', id);
            id++;

        }
    }
}

async function crawlDescription(path) {
    return new Promise((resolve, reject) => {

    })
}

async function main() {
    await getAdCareerData(arr);
    await getAdPurposeData(arr);
    await getAdTypeData(arr);
    await getAdBaseData(arr);
    await writeToFile(arr);
    return arr;
}

module.exports = main;