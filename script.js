// Create variables for our buttons

var genBtn = document.querySelector("#generate");
console.log(genBtn);

var copyBtn = document.querySelector("#copy");
console.log(copyBtn);

var newPassEl = document.querySelector("#newpass");
console.log(newPassEl);

// Create click event for our buttons

genBtn.addEventListener("click", function () {
    // Create a test to make sure the button works
    // alert("You just clicked the Generate Password button!");

    var hwlng = prompt("How many characters do you want your password to be? Please choose a number between 8 and 128.");

    if (hwlng < 8 || hwlng > 128) {
        hwlng = prompt("You must enter a number between 8 and 128. You have two attempts remaining.");
    }
    if (hwlng < 8 || hwlng > 128) {
        hwlng = prompt("You must enter a number between 8 and 128. You have one attempt remaining.");
    }
    if (hwlng < 8 || hwlng > 128) {
        return;
    }

    var cnfrmspchr = confirm("Would you like your password to include special characters?");

    if (cnfrmspchr === true) {
        newPassEl = newPassEl + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        console.log("confirmed special characters");
    } else {
        console.log("no special characters");
    }

    var cnfrmnum = confirm("Would you like your password to include numbers?");

    if (cnfrmnum === true) {
        newPassEl = newPassEl + "0123456789";
        console.log("confirmed special characters");
    } else {
        console.log("no numbers");
    }

    var cnfrmlwrcs = confirm("Would you like your password to include lower case letter?");

    if (cnfrmlwrcs === true) {
        newPassEl = newPassEl + "abcdefghijklmnopqrstuvwxyz";
        console.log("confirmed lower case letters");
    } else {
        console.log("no lower case letters");
    }

    var cnfrmuprcs = confirm("Would you like your password to include upper case letters?");

    if (cnfrmuprcs === true) {
        newPassEl = newPassEl + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log("confirmed upper case letters");
    } else {
        console.log("no upper case letters");
    }

    for (var i = 0; i < hwlng; i++) {
        newPassEl += newPassEl[Math.floor(Math.random() * newPassEl.length)];
        console.log(newPassEl);
    }

    newPassEl.textContent = newPassEl.nodeValue;
});

copyBtn.addEventListener("click", function () {
    // Create a test to make sure the button works
    // alert("You just clicked the Copy to Clipboard button!");
});









// var hwlng = prompt("How many characters do you want your password to be? Please choose a number between 8 and 128.");

// var cnfrmspchr = confirm("Would you like your password to include special characters?");

// var cnfrmnum = confirm("Would you like your password to include numbers?");

// var cnfrmlwrcs = confirm("Would you like your password to include lower case letter?");

// var cnfrmuprcs = confirm("Would you like your password to include upper case letters?");