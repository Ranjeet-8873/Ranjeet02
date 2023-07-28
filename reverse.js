// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  // Delayed reverse function
  function delayedReverse(input) {
    setTimeout(function() {
      var reversedString = reverseString(input);
      console.log('Reversed string:', reversedString);
    }, 2000);
  }
  
  // Example usage
  var input = 'Ranjeet pandey';
  console.log('Input string:', input);
  
  // Call the delayed reverse function
  delayedReverse(input);
  