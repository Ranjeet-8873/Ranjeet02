function matchURL(input) {
    // Regex pattern to match valid URLs
    var regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-.]+.[a-zA-Z]+$/;
  
    if (regex.test(input)) {
      console.log("Input matches the conditions. It is a valid URL.");
    } else {
      console.log("Input does not match the conditions. It is not a valid URL.");
    }
  }
  
  // Test cases
  matchURL("http://example.com");      // Valid URL
  matchURL("https://www.example.com"); // Valid URL
  matchURL("ftp://example.com");       // Invalid URL
  matchURL("https://example");         // Invalid URL
  