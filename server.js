const db = require('./app/config/db.config');

const Item = db.item;
const AdBase = db.adbase;
const AdCareer = db.adcareer;
const AdType = db.adtype;
const AdPurpose = db.adpurpose;

const getData = require('./getData');

function filter(data) {
    let adbases = ["image", "embed"];
    let adtypes = [57, 5, 30, 7, 16, 17, 25];
    let adpurposes = [4, 11, 12];
    let adcareers = [3, 8, 10, 22, 9, 23, 10, 14, 15, 31, 18, 19, 24];
    return new Promise((resolve, reject) => {

        for (let i = 0; i < data.length; i++) {
            data[i] = Object.assign({
                link: data[i].link,
                thumb: data[i].thumb,
                title: data[i].title,
                postDate: data[i].postDate,
                link_embed: data[i].link_embed,
                adcareerID: adcareers.indexOf(data[i].adCareer) + 1,
                adpurposeID: adpurposes.indexOf(data[i].adPurpose) + 1,
                adtypeID: adtypes.indexOf(data[i].adType) + 1,
                adbaseID: adbases.indexOf(data[i].adBase) + 1,
            }, {});
        }
        if (data.length === 0) reject(new Error("filter error"));
        resolve(data);
    })
}

async function main() {
    const data = await getData();
    const arr = await filter(data);

    db.sequelize.sync({
        force: true
    })
        .then(() => {
            return AdCareer.bulkCreate([{
                description: 'Công Nghệ',
            }, {
                description: 'Dịch Vụ',
            }, {
                description: 'Du lịch - Giải Trí',
            }, {
                description: 'Đồ Ăn - Đồ Uống',
            }, {
                description: 'E-commerce',
            }, {
                description: 'Game - ứng dụng',
            }, {
                description: 'Giáo dục - Cộng đồng',
            }, {
                description: 'Khác',
            }, {
                description: 'Nhà cửa - Vật dụng gia đình',
            }, {
                description: 'Phụ kiện - Đồ chơi - Xe cộ',
            }, {
                description: 'Thể Dục - Thể Thao',
            }, {
                description: 'Thời Trang - Làm Đẹp',
            }, {
                description: 'Y tế, thuốc và sức khỏe',
            }])
        }).then(() => {
            return AdPurpose.bulkCreate([{
                description: 'Kinh doanh sản phẩm/dịch vụ',
            },
            {
                description: 'Sự kiện, cuộc thi, tuyển dụng',
            },
            {
                description: 'Tăng người theo dõi, lượt truy cập trang',
            }
            ])
        }).then(() => {
            return AdType.bulkCreate([{
                description: 'Nội dung Viral',
            }, {
                description: 'Quảng cáo bài viết',
            }, {
                description: 'Quảng cáo Game, ứng dụng',
            }, {
                description: 'Quảng cáo Link website',
            }, {
                description: 'Quảng cáo sự kiện',
            }, {
                description: 'Quảng cáo trang',
            }, {
                description: 'Quảng cáo video',
            }])
        }).then(() => {
            return AdBase.bulkCreate([{
                description: 'Ảnh'
            }, {
                description: 'Link nhúng'
            }])
        }).then(() => {
            return Item.bulkCreate(arr);
        }).then(() => {
            console.log("operation completed!")
        })
}

main();
