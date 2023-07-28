function manipulateString (inputString, callback) {
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
}

function logstring (manipulatedString) {
    console.log(`The manipulatedstring is: ${manipulatedString}`);

}
// Expected output: 

manipulateString("Hello Ranjeet!", logstring) //the manipulatedString is: HELLO RANJEET