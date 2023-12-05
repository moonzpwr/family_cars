import express from 'express';
import fetch from "node-fetch";
import bodyParser from "body-parser";
const app = express();

import optionsMapper from './dictionary/optionsMapper.mjs';


import request from 'request';
import { Cookie } from 'request-cookies';


const port = 3081;

async function getExchangeData() {
    // https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json
    return fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "_ga=GA1.3.105471147.1594589120; locale=ua; _gid=GA1.3.1523093686.1642616464",
            "Referer": "https://bank.gov.ua/ua/open-data/api-dev",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    })
        .then(res => {
            return res.text();
        })
        .then(data => {
            const dataToJSON = JSON.parse(data);
            return dataToJSON.filter(({ cc } = {}) => cc === 'USD' || cc === 'EUR');
        })
        .catch(err => console.log(err));
}

async function login() {
    let phpsessid = 'phpsessid';
    return new Promise(function (resolve, reject) {
        request.post('https://easycars.yez.biz/api/front/security/login',
            {
             form: {
                 phone: '+380504111721',
                 password: 'Easycars1985',
                 domain: 36
             }
            },
            function(err, response, body) {
                const rawCookies = response.headers['set-cookie'];

                for (var i in rawCookies) {
                    var cookie = new Cookie(rawCookies[i]);
                    if (cookie.key === 'PHPSESSID') {
                        phpsessid = cookie.value;
                        resolve(phpsessid);
                    }
                }
                if (err) {
                    reject(error);
                }
            });
    });
}

async function easycarsRequest(phpsessid, easyCarId) {
    return fetch(`https://easycars.yez.biz/api/admin/lot?field=vin&query=${easyCarId}`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": `PHPSESSID=${phpsessid};`
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
    })
        .then(res => {
            return res.text();
    })
        .then(data => {
            return { data };
        })
        .catch(err => console.log(err));
}

async function carfaxLogin() {
    let evomwblbg = 'evomwblbg';
    let vincheck = 'vincheck';
    return await fetch("https://dealer.vin-check.com.ua/", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "Referer": "https://dealer.vin-check.com.ua/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "username=vol.byb&password=3UJCYbB8&service=login&stayloggedin=2678400",
        "method": "POST"
    })
        .then(res => {
            const resHeaders = res.headers;
            const rawCookies = resHeaders.raw()['set-cookie'];
            for (var i in rawCookies) {
                var cookie = new Cookie(rawCookies[i]);
                if (cookie.key === 'evomwblbg') {
                    evomwblbg = cookie.value;
                }
                if (cookie.key === 'vincheck') {

                    vincheck = cookie.value;
                }
            }
            return { evomwblbg, vincheck };
            // return res.text();
        })
        .catch(err => console.log(err));
}

async function carfaxRequest(carfaxLoginCookies, carVin) {
    const { evomwblbg, vincheck } = carfaxLoginCookies;
    console.log('carVin', carVin);
    console.log('carfaxLoginCookies', carfaxLoginCookies);
    return fetch(`https://dealer.vin-check.com.ua/download-file?vin=${carVin}&translate=0&lang=eng`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": `evomwblbg=${evomwblbg}`,
            "Referer": "https://dealer.vin-check.com.ua/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    })
        .then(res => {
            return res.text();
        })
        .then(data => {
            // console.log('data', data);
            return { data };
        })
        .catch(err => console.log(err));
}

async function carfaxRequest2(carfaxLoginCookies, carVin) {
    const { evomwblbg, vincheck } = carfaxLoginCookies;
    console.log('carfaxLoginCookies', carfaxLoginCookies);
    return fetch(`https://dealer.vin-check.com.ua/ajax?action=save_carfax_record&vin=${carVin}&comment=Andrey&translate=0`, {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": `evomwblbg=${evomwblbg}; vincheck=${vincheck}`,
            "Referer": "https://dealer.vin-check.com.ua/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "POST"
    })
        .then(res => {
            console.log('res', res);
            console.log('res ok', res.ok);
            return res.text();
        })
        .then(data => {
            // console.log('data', data);
            return { data };
        })
        .catch(err => console.log(err));
}

app.use(bodyParser.json()); // support json encoded bodies

app.get('/test/items/:id', async function (req, res) {
    try {
        const { id: carVin } = req.params;
        const loginRequest = await login();
        const easyCarsData = await easycarsRequest(loginRequest, carVin);

        const { data } = easyCarsData;
        const parsedData = JSON.parse(data) || {};
        const { items: [requestedItem] = [] } = parsedData;

        const mappedData = optionsMapper(requestedItem);

        const responseBody = {
            easyCars: mappedData,
        }
        res.status(200).json(responseBody);
    } catch(e) {
        console.log(e.stack)
        res.status(500).send({error: e.message})
    }
});

app.get('/test/exchange', async function (req, res) {
    try {
        const exchangeData = await getExchangeData();

        console.log('exchangeData', exchangeData);
        res.status(200).json(exchangeData);
    } catch(e) {
        console.log(e.stack)
        res.status(500).send({error: e.message})
    }
});

app.get('/test/carfax/:id', async function (req, res) {
    try {
        const { id: carVin } = req.params;
        const carfaxLoginCookies = await carfaxLogin();
        const carfaxData = await carfaxRequest2(carfaxLoginCookies, carVin);
        console.log('carfaxData', carfaxData);

        const responseBody = {
            easyCars: {},
        }
        res.status(200).json(responseBody);
    } catch(e) {
        console.log(e.stack)
        res.status(500).send({error: e.message})
    }
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});