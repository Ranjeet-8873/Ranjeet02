class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }
  const user = new User('RANJEET PANDEY', 'password');
  console.log(user.password); // Output: ********
  
  user.password = 'Newpass'; // Output: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.
  
  user.password = 'NewPass123';
  console.log(user.password); // Output: **********
    