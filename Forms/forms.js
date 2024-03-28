
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;

    // Validate first name, last name, and email
    if (!isValidName(firstName) || !isValidName(lastName)) {
        showMessage("Please enter a valid first and last name.", "error");
        return; // Exit early if validation fails
    }

    if (email.trim() === "") {
        showMessage("Please enter your email.", "error");
        return; // Exit early if validation fails
    }

    // Validate date of birth
    if (!isValidDateOfBirth(dob)) {
        showMessage("Please enter a valid date of birth (1901 or later).", "error");
        return; // Exit early if validation fails
    }

    // Simulate successful form submission
    showMessage("Form submitted successfully.", "success");
    // Clear form fields
    document.getElementById("myForm").reset();
});

function isValidName(name) {
    // Simple validation: check if the name contains only letters and is not empty
    return /^[a-zA-Z]+$/.test(name.trim());
}

function isValidDateOfBirth(dob) {
    // Validate date format (YYYY-MM-DD) using regular expression
    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(dob)) {
        return false;
    }

    // Parse the date string
    var parts = dob.split("-");
    var year = parseInt(parts[0], 10);

    // Check if the year is 1901 or later
    return (year >= 1901);
}

function showMessage(message, type) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
    messageDiv.className = type; // Set CSS class for styling
}