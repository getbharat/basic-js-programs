const javaScirptObject = {
    firstName: 'Bharat',
    lastName: 'Bhooshan',
    rollNumber: 378,
    department: 'CS',
    course:'Computer Science and Engineering'

};


// converts java script object to json string.
const jsonString = JSON.stringify(javaScirptObject);
console.log(jsonString);

const javaScirptObjectClone = JSON.parse(jsonString);
console.log(javaScirptObjectClone);