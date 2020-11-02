const superagent = require('superagent');
const IntercomFoodEvent = require('./foodevent');
const {customerListValidation} = require('./input-validation');
const TEXT_FILE_URL = 'https://s3.amazonaws.com/intercom-take-home-test/customers.txt';
const Customer = require('./customer');
const {txttoJSON,JSONtotxt,writeoutputToFile} = require('./file');


(async () => {
       try {
              /**Get the customer txt file */
              const result = await superagent.get(TEXT_FILE_URL);
              
              /** Parse the txt file  */

              let customerList = txttoJSON(result.text);

              /********** Validate custom list and throw error if list is not valid ***********/
              
              customerListValidation(customerList);

              /********** Create a new intercom food event *********/
              let intercomfoodevent = new IntercomFoodEvent();

              /**********   get customers with Intercom Event within cetain range */
              let filteredcustomers = intercomfoodevent.filterCustomersWithinEventRange(customerList);

              /*********** Sort the customer list ********/

              let sortedtList= filteredcustomers.sort((a,b) => (a.user_id > b.user_id) ? 1 : ((b.user_id > a.user_id) ? -1 : 0));
              
              /** Convert Json to Plain text  */
              let output = JSONtotxt(sortedtList);

              /** Save output to output.txt file */
              writeoutputToFile(output);
             



       } catch (err) {
              console.error(err);
       }
})();