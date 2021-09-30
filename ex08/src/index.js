// Lodash
const _ = require('lodash');
// Only change code below this line
// users nested array with four objects starts here
users = [
    {'firstName': 'John', 'lastName': 'Doe', 'age': 24, 'gender': 'male'},
    {'firstName': 'Jane', 'lastName': 'Doe', 'age': 5, 'gender': 'female'},
    {'firstName': 'Jim', 'lastName': 'Carrey', 'age': 54, 'gender': 'male'},
    {'firstName': 'kate', 'lastName': 'Winslet', 'age': 40, 'gender': 'female'}
];
// users nested array with four objects end here

// getUsers function - list of users starts here
function getUsers(){
    var output = "";
    for(var i=0; i<users.length; i++){
        console.log(users[i]);
        output.push(findUser(users[i].lastName,users[i].gender));
    }
    return output;
}
// getUsers function - list of users end here

//findUser(lastName, gender) function starts here
function findUser(lastName, gender){
    try{
        var user = _.find(users, {'lastName': lastName, 'gender': gender});
        var iFindUser = user.firstName + user.lastName + " is " + user.age + ", " + user.gender;
        return iFindUser;
    } catch(error){
        return "Cannot read property 'firstname' of undefined";
        console.log();
    }
}
//findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser("Doe", "female");

module.exports = findUser;