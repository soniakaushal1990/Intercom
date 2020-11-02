# Intercom Assignment
We have some customer records in a text file (customers.txt) -- one customer per line, JSON
lines formatted. We want to invite any customer within 100km of our Dublin office for some food
and drinks on us. Write a program that will read the full list of customers and output the names
and user ids of matching customers (within 100km), sorted by User ID (ascending).




## Tech and Packages Used
I have used NodeJs as a programming language for this project. 

  * SuperAgent to get the list of customers from a remote url
  * Joi Validater for validating the input text file
  * Jest to write tests


### Installation

***

```
$ Install NodeJS Version 12.x.x  

$ cd /path/to/the/folder
Navigate to the directory 

$ npm install
Installs all the packages required to run the application

$ npm run start

Runs the application and saves the output to output.txt file

$ npm run test

Run all the test cases written in tests folder 







