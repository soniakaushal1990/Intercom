const IntercomFoodEvent = require('../foodevent');
const fs = require('fs');
const {
    txttoJSON,
    JSONtotxt,
    writeoutputToFile
} = require('../file');


test('Should return valid Intercom event object', () => {
    let i = new IntercomFoodEvent();
    expect(i.officeLatitude).toBe(53.339428);
    expect(i.officeLongitude).toBe(-6.257664);
    expect(i.minDistance).toBe(100);
});



test('Should return customers with 100 kms', () => {
    try {
        let url = __dirname + "/cus-test1.txt";
        var data = fs.readFileSync(url, 'utf8');
        let customerList = txttoJSON(data);
        let i = new IntercomFoodEvent();
        let customers = i.filterCustomersWithinEventRange(customerList);
        expect(customers).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "name": "Ian Kehoe",
                    "user_id": 4
                }),
                expect.objectContaining({
                    "user_id": 6,
                    "name": "Theresa Enright"
                })

            ])
        )

    } catch (e) {
        console.log('Error:', e.stack);
    }

})



test('Should return customers with 30 kms', () => {
    try {
        let url = __dirname + "/cus-test1.txt";
        var data = fs.readFileSync(url, 'utf8');
        let customerList = txttoJSON(data);
        let i = new IntercomFoodEvent();
        let customers = i.filterCustomersWithinEventRange(customerList);
        expect(customers).toEqual( // 1
            expect.arrayContaining([ // 2
                expect.objectContaining({"user_id":5,"name":"Nora Dempsey"})
            ])
        )

    } catch (e) {
        console.log('Error:', e.stack);
    }

})


