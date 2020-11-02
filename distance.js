
/**
 * Function to convert degree to radians
 * @param {Number} deg 
 */

const toRadians = function (deg) {
    return deg * (Math.PI / 180);
}



/**
 * Calculates the distance between two given points A and B given GPS coordinates
 * 
 * @param {Number} x1 Latitude of Point 1
 * @param {Number} y1 Longitude of Point 1
 * @param {Number} x2 Latitude of Point 2
 * @param {Number} y2 Longitude of Point 2
 * 
 */

const getDistance = function (x1, y1, x2, y2) {
    //Earth radius in kms
    const EARTH_RADIUS = 6371;
    let x1Rad = toRadians(x1);
    let y1Rad = toRadians(y1);
    let x2Rad = toRadians(x2);
    let y2Rad = toRadians(y2);
    let angle = Math.acos(Math.sin(x1Rad) * Math.sin(x2Rad) +
                Math.cos(x1Rad) * Math.cos(x2Rad) * Math.cos(y1Rad - y2Rad));
    distance = (EARTH_RADIUS * angle);
    return distance;
}


module.exports = {
    toRadians,
    getDistance
}