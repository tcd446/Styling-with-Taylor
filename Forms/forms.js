document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data within the event listener
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value; // Phone number
    var dob = document.getElementById("dob").value; // Date of Birth

    // Validate form and submit if valid
    if (validateForm(firstName, lastName, email, phone, dob)) {
        var age = calculateAge(dob);
        if (age >= 65) {
            showMessage("Form submitted successfully. You are eligible for a senior discount!", "success");
        } else {
            showMessage("Form submitted successfully.", "success");
        }
    }
});

function validateForm(firstName, lastName, email, phone, dob) {
    // First, perform all necessary validations
    if (!isValidName(firstName) || !isValidName(lastName)) {
        showMessage("Please enter a valid first and last name.", "error");
        return false;
    }

    if (email.trim() === "") {
        showMessage("Please enter your email.", "error");
        return false;
    }

    if (!isValidPhoneNumber(phone)) {
        showMessage("Please enter a valid phone number with exactly 10 digits.", "error");
        return false;
    }

    if (!isValidDateOfBirth(dob)) {
        showMessage("Please enter a valid date of birth (1901 or later).", "error");
        return false;
    }

    // If all validations pass
    return true;
}

// Example validation function for name
function isValidName(name) {
    return /^[a-zA-Z ]{2,}$/.test(name); // Simple regex for letters and spaces, minimum 2 characters
}

// Example validation function for phone number
function isValidPhoneNumber(phone) {
    return /^\d{10}$/.test(phone); // Checks for exactly 10 digits
}

// Example validation function for date of birth
function isValidDateOfBirth(dob) {
    var year = new Date(dob).getFullYear();
    return year >= 1901 && year <= new Date().getFullYear();
}

// Age calculation function
function calculateAge(dob) {
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    return age;
}

function showMessage(message, type) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
    messageDiv.className = type === "success" ? "text-green-500" : "text-red-500"; // Set CSS class for styling
}
