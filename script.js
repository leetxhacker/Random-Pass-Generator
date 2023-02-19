function generatePassword() {
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var special = document.getElementById("special").checked;
    var maxLength = document.getElementById("max-length").value;
  
    var charset = "";
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (special) {
      charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~<>><";
    }
  
    var password = "";
    for (var i = 0; i < maxLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
// Update the password display
    document.getElementById("password").textContent = password;
  }
  
