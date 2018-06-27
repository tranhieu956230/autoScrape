const db = require('./app/config/db.config');
const Op = db.Sequelize.Op;
const Item = db.item;
const AdBase = db.adbase;
const AdCareer = db.adcareer;
const AdType = db.adtype;
const AdPurpose = db.adpurpose;

const getData = require('./getData');

function filterData(data, type, typeID) {
    var arr = [];
    return new Promise((resolve, reject) => {
        if (type == 'adBase') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].adBase[0] == typeID) arr.push(i + 1);
            }
        }
        if (type == 'adCareer') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].adCareer.indexOf(typeID) != -1) arr.push(i + 1);
            }
        }
        if (type == 'adPurpose') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].adPurpose.indexOf(typeID) != -1) arr.push(i + 1);
            }
        }
        if (type == 'adType') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].adType.indexOf(typeID) != -1) arr.push(i + 1);
            }
        }
        if (data.length === 0) reject(new Error("filter error"));
        resolve(arr);
    })
}

async function main() {
    const data = await getData();
    var tempArr = data.map(obj => Object.assign({} , {
        link: obj.link,
        thumb: obj.thumb,
        title: obj.title,
        post_date: obj.postDate,
        link_embed: obj.link_embed
    }))

    db.sequelize.sync({
        force: true
    })
        .then(() => {
            return Item.bulkCreate(tempArr);
        })

        //ADCAREER
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 3);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Công Nghệ'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 8);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Dịch Vụ'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 10);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Du lịch - Giải Trí'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 22);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Đồ Ăn - Đồ Uống'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 9);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'E-commerce'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 23);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Game-Ứng dụng'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 10);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Giáo dục-Cộng đồng'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 14);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Khác'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 15);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Nhà cửa-Vật dụng gia đình'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 31);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Phụ kiện-Đồ chơi-Xe cộ'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 18);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Thể Dục-Thể Thao'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 19);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Thời Trang-Làm Đẹp'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adCareer', 24);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdCareer.create({
                description: 'Y tế,thuốc và sức khỏe'
            }).then((adcareer) => {
                return adcareer.setItems(ads);
            })
        })

        //ADPURPOSE
        .then(async () => {
            const tmp = await filterData(data, 'adPurpose', 4);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdPurpose.create({
                description: 'Kinh doanh sản phẩm/dịch vụ'
            }).then((adpurpose) => {
                return adpurpose.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adPurpose', 11);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdPurpose.create({
                description: 'Sự kiện,cuộc thi,tuyển dụng'
            }).then((adpurpose) => {
                return adpurpose.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adPurpose', 12);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdPurpose.create({
                description: 'Tăng người theo dõi, lượt truy cập trang'
            }).then((adpurpose) => {
                return adpurpose.setItems(ads);
            })
        })

        //ADTYPE
        .then(async () => {
            const tmp = await filterData(data, 'adType', 57);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Nội dung Viral'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adType', 5);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Quảng cáo bài viết'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adType', 30);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Quảng cáo Game, ứng dụng'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adType', 7);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Quảng cáo Link website'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adType', 16);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Quảng cáo sự kiện'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adType', 17);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Quảng cáo trang'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adType', 25);
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdType.create({
                description: 'Quảng cáo video'
            }).then((adtype) => {
                return adtype.setItems(ads);
            })
        })

        //ADBASE
        .then(async () => {
            const tmp = await filterData(data, 'adBase', "image");
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdBase.create({
                description: 'Ảnh'
            }).then((adbase) => {
                return adbase.setItems(ads);
            })
        })
        .then(async () => {
            const tmp = await filterData(data, 'adBase', "embed");
            return Item.findAll({
                where: {
                    id: {
                        [Op.in]: tmp
                    }
                }
            });
        })
        .then((ads) => {
            return AdBase.create({
                description: 'Link nhúng'
            }).then((adbase) => {
                return adbase.setItems(ads);
            })
        })
        .then(() => {
            console.log("-------------- Operation Completed! --------------");
            db.sequelize.close();
        })
}
main();
