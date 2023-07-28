function validateLinkedInProfileURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    
    if (regex.test(url)) {
      return "Valid LinkedIn profile URL.";
    } else {
      return "Invalid LinkedIn profile URL.";
    }
  }
  
  // Examples
  console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/john-doe")); // Valid LinkedIn profile URL.
  console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/john.doe")); // Invalid LinkedIn profile URL.
  console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe1234567890123456789012345")); // Invalid LinkedIn profile URL.
  console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe!")); // Invalid LinkedIn profile URL.
  