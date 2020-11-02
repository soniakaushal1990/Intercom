const {toRadians,getDistance} = require('../distance');



test('Should convert 53.339428 degrees to 0.9309486397304539 radians', () => {
    let radians = toRadians(53.339428);
    expect(radians).toBe(0.9309486397304539);

});


test('Should calculate distance between two GPS coordinates', () => {
    let x1=53.339428;
    let y1=-6.257664;
    let x2=52.986375;
    let y2=-6.043701; 
    let distance = getDistance(x1,y1,x2,y2);
    expect(distance).toBe(41.76872550099624);
});

