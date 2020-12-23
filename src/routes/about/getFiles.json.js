import fs from 'fs';


export async function post(req, res, next) {
    const testFolder = 'images/';
    let result = [];
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
            result.push(file);
        });
    });
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(result));
}