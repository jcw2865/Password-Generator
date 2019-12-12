// Create variables for our buttons

var genBtn = document.querySelector("#generate");
console.log(genBtn);

var copyBtn = document.querySelector("#copy");
console.log(copyBtn);

// Create click event for our buttons

genBtn.addEventListener("click", function () {
    // Create a test to make sure the button works
    // alert("You just clicked the Generate Password button!");

    var hwlng = prompt("How many characters do you want your password to be? Please choose a number between 8 and 128.");

    var cnfrmspchr = confirm("Would you like your password to include special characters?");

    var cnfrmnum = confirm("Would you like your password to include numbers?");

    var cnfrmlwrcs = confirm("Would you like your password to include lower case letter?");

    var cnfrmuprcs = confirm("Would you like your password to include upper case letters?");
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