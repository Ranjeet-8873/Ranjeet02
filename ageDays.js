const person = {
    firstName: "Ranjeet",
    lastName: "Pandey",
    age: 24,
};
function ageInDays(personObject, callback) {
    const fullName =` ${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName, ageInDays);
}
function logResult(fullName, ageInDays) {
    console.log(
        `the person's fullNAme is ${fullName} and their age in days is ${ageInDays}.`
    );
}
//Expected output.
ageInDays(person, logResult); //The person's full name and theiir age in days
