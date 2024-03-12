// async function getTeams(year, k) {
//     let a = 1;
//     const object = {};
//     while (a < 25) {
//         try {
//             const response = await fetch(
//                 `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${a}`,
//                 {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error(`Ошибка HTTP: ${response.status}`);
//             }

//             const data = await response.json();
//             data;
//             for (const match of data.data) {
//                 object[match.team1] = (object[match.team1] || 0) + 1;
//                 object[match.team2] = (object[match.team2] || 0) + 1;
//             }
//             a++;
//         } catch (error) {
//             console.error(error.message);
//         }
//     }
//     const sortCount = Object.keys(object).filter((a) => object[a] >= k);
//     const sortedKeys = sortCount.sort();
//     for (const a of sortedKeys) {
//         console.log(a);
//     }
// }

// getTeams(2015, 13);

'use strict';
const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const fetch = (url) => {
    return new Promise((resolve, reject) => {
        https
            .get(url, (resp) => {
                let data = '';

                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })
            .on('error', (err) => {
                reject(err.message);
            });
    });
};

const getAPIURL = (year, page) => {
    return `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;
};

const getFootballMatches = (year, page) => {
    const url = getAPIURL(year, page);
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((jsonRespone) => resolve(jsonRespone))
            .catch((e) => reject(e.message));
    });
};
async function getTeams(year, k) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>

    const matchesPerTeam = {};
    let initialPage = 1;
    let totalPages = 1;
    while (initialPage <= totalPages) {
        const { total_pages, data: matches } = await getFootballMatches(year, initialPage);

        matches.forEach(({ team1, team2 }) => {
            matchesPerTeam[team1] = (matchesPerTeam[team1] || 0) + 1;
            matchesPerTeam[team2] = (matchesPerTeam[team2] || 0) + 1;
        });
        totalPages = total_pages;
        initialPage += 1;
    }
    return Object.entries(matchesPerTeam)
        .filter(([, numOfMatches]) => numOfMatches >= k)
        .map(([team]) => team)
        .sort();
}
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim());
    const k = parseInt(readLine().trim());

    const teams = await getTeams(year, k);

    for (const team of teams) {
        ws.write(`${team}\n`);
    }
}

//task 2
class StaffList {
    constructor() {
        this.staffList = [];
    }

    add(name, age) {
        if (Number(age) <= 20) {
            throw new Error('Staff member age must be greater than 20');
        }

        if (this.staffList.find((i) => i.name === name)) {
            throw new Error('Staff member with the same name already exists');
        }

        this.staffList.push({ name, age });
    }

    remove(name) {
        const index = this.staffList.findIndex((i) => i.name === name);
        if (index !== -1) {
            this.staffList.splice(index, 1);
            return true;
        }
        return false;
    }

    getSize() {
        return this.staffList.length;
    }
}
