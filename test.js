const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');


request('https://www.mauquangcao.com/ad/phong-vu-2/',function(error, response, body){
     const $ = cheerio.load(body);
     fs.writeFile('text.txt', ($('div.mqc-single-ad').text()), err => {
            if(err) console.log("Write to File error");
            else console.log('Write successful');
     } );
})
    