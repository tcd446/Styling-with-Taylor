// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value; // Phone number
    var dob = document.getElementById("dob").value; // Date of Birth

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
    }

    // Assuming all validations pass, proceed to check for senior discount eligibility
    var age = calculateAge(dob);
    if (age >= 65) {
        // Eligible for senior discount
        showMessage("You are eligible for a senior discount. Your form has been submitted successfully.", "success");
    } else {
        // Not eligible for senior discount but form is successfully submitted
        showMessage("Your form has been submitted successfully.", "success");
    }
    // Clear form fields after submission to simulate form processing
    document.getElementById("myForm").reset();
});