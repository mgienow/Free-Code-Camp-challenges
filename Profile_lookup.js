/*
So: you're given an array, contacts, representing different people
 Write a function, lookUpProfile, that takes the arguments firstName and prop.
 The function should check if firstName matches any of the firstName properties in
 `contacts`. If it does match, then it should check if `prop` is a property of
 that contact.
 If both are true, return the value of that property.
 If firstName does not match any in contacts, rturn 'No such contact'.
 If firstName does match but prop does not correspond to any properties, return "No such property".
*/
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(firstName, prop){
/* First: a for loop to iterate through the contacts array
   to check for a firstName match: */
  for(var i=0; i<contacts.length; i++){
/*if the firstName passed in as argument matches
    the firstName at the contacts[i] index, then go to next step:*/
    if(firstName === contacts[i].firstName){
/*having established that firstName matches an entry in the
contacts array, check if prop is one of that entry's properties:*/
      if(contacts[i].hasOwnProperty(prop)){
/* if prop matches a property, return all the values of that property:*/
        return contacts[i][prop];
/* if it does not match, return no such property: */
      }else {
        return "No such property";
      }
    }
  }
/* as final condition, if firstName is not found to
match a contact, return no such contact:*/  
  return "No such contact"
}
