document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data within the event listener
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value; // Phone number
    var dob = document.getElementById("dob").value; // Date of Birth
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate form and submit if valid
    if (validateForm(firstName, lastName, email, phone, dob, password, confirmPassword)) {
        var age = calculateAge(dob);
        if (age >= 65) {
            showPopup("Form submitted successfully. You are eligible for a senior discount!");
        } else {
            showPopup("Form submitted successfully.");
        }
        // Reset the form after successful submission
        document.getElementById("myForm").reset();
    }
});

document.getElementById("togglePassword").addEventListener("click", function () {
    var passwordField = document.getElementById("password");
    var icon = this.querySelector("i");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    var confirmPasswordField = document.getElementById("confirmPassword");
    var icon = this.querySelector("i");
    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        confirmPasswordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});

document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    var feedback = getPasswordFeedback(password);
    updatePasswordFeedback(feedback.conditions);
});

function validateForm(firstName, lastName, email, phone, dob, password, confirmPassword) {
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

    if (!isValidPassword(password)) {
        showMessage("Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.", "error");
        return false;
    }

    if (!doPasswordsMatch(password, confirmPassword)) {
        showMessage("Passwords do not match.", "error");
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

// Validation function for password
function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
}

// Function to provide real-time password feedback
function getPasswordFeedback(password) {
    var conditions = [
        { regex: /.{8,}/, message: "8 or more characters", met: false },
        { regex: /[A-Z]/, message: "uppercase letter", met: false },
        { regex: /[a-z]/, message: "lowercase letter", met: false },
        { regex: /\d/, message: "number", met: false },
        { regex: /[\W_]/, message: "special character", met: false }
    ];

    conditions.forEach(function(condition) {
        condition.met = condition.regex.test(password);
    });

    return {
        conditions: conditions
    };
}

function updatePasswordFeedback(conditions) {
    var feedbackElement = document.getElementById("passwordFeedback");
    feedbackElement.innerHTML = conditions.map(function(condition) {
        var checkMark = condition.met ? "✅" : "❌";
        var colorClass = condition.met ? "text-green-500" : "text-red-500";
        return "<li class='" + colorClass + "'>" + checkMark + " " + condition.message + "</li>";
    }).join("");
}

// Function to check if passwords match
function doPasswordsMatch(password, confirmPassword) {
    return password === confirmPassword;
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

// Function to show a temporary pop-up message
function showPopup(message) {
    var popup = document.getElementById("popup");
    var popupMessage = document.getElementById("popupMessage");
    popupMessage.innerHTML = message;
    popup.classList.remove("hidden");
    
    setTimeout(function() {
        popup.classList.add("hidden");
    }, 3000); // Hide the pop-up after 3 seconds
}
