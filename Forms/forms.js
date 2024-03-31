document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value; // Get phone number

    // Validate first name, last name, and email
    if (!isValidName(firstName) || !isValidName(lastName)) {
        showMessage("Please enter a valid first and last name.", "error");
        return;
    }

    if (email.trim() === "") {
        showMessage("Please enter your email.", "error");
        return;
    }

    if (!isValidDateOfBirth(dob)) {
        showMessage("Please enter a valid date of birth (1901 or later).", "error");
        return;
    }

    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
        showMessage("Please enter a valid phone number with exactly 10 digits.", "error");
        return;
    }

    // Simulate successful form submission
    showMessage("Form submitted successfully.", "success");
    // Clear form fields
    document.getElementById("myForm").reset();
}


function showMessage(message, type) {
        var messageDiv = document.getElementById("message");
        messageDiv.innerHTML = message;
        messageDiv.className = type; // Set CSS class for styling, 'error' or 'success'
    }
