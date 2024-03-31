// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value; // Phone number
    var dob = document.getElementById("dob").value; // Date of Birth

    // Simulate successful form submission
    showMessage("Form submitted successfully.", "success");
    // Clear form fields
    document.getElementById("myForm").reset();
});

// First, perform all necessary validations
if (!isValidName(firstName) || !isValidName(lastName)) {
    showMessage("Please enter a valid first and last name.", "error");
    return; // Exit early if validation fails
}

if (email.trim() === "") {
    showMessage("Please enter your email.", "error");
    return; // Exit early if validation fails
}

if (!isValidPhoneNumber(phone)) {
    showMessage("Please enter a valid phone number with exactly 10 digits.", "error");
    return; // Exit early if validation fails
}

if (!isValidDateOfBirth(dob)) {
    showMessage("Please enter a valid date of birth (1901 or later).", "error");
    return; // Exit early if validation fails

} else {
    // Simulate successful form submission

    function showMessage(message, type) {
        var messageDiv = document.getElementById("message");
        messageDiv.innerHTML = message;
        messageDiv.className = type; // Set CSS class for styling
    };


}
