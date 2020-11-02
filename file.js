const fs = require('fs');

/**
 * Convert a Plain txt to JSON Object
 * @param {string} txt 
 */

function txttoJSON(txt) {
    let jsonArray = [];
    let array = txt.split('\n');
    array.forEach(elem => {
        let paresedElem = JSON.parse(elem);
        jsonArray.push(paresedElem);

    });
    return jsonArray;
}


function JSONtotxt(json) {

    let txt = '';
    json.forEach((elem) => {
        txt += JSON.stringify(elem) + "\n";
    });
    return txt;

}

function writeoutputToFile(txt) {
    fs.writeFile('./output.txt', txt, function (error) {
        if (error) {
            console.log(error);
        }
    })

}


module.exports = {
    txttoJSON,
    JSONtotxt,
    writeoutputToFile
}