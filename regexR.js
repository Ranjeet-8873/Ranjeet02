function validateGithubProfileURL(URL) {
    const regex = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g;
   if (regex.test(URL)) {
    return " Valid Linked profile URL";
   }  else {
    return " invalid linkedin profile";
   }
}

// Examples
console.log(validateLinkedInProfileURL)