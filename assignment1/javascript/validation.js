//email validation
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#mail + span.error");

//checking if what the user typed in is valid
email.addEventListener("input", (event) => {
    
    if (email.validity.valid) {
        
        //if valid we remove the error
        emailError.textContent = ""; 
        emailError.className = "error"; 
    } else {
        //if it is still invalid show error
        showError();
    }
});

form.addEventListener("submit", (event) => {
    // if email is valid we allow submit
    if (!email.validity.valid) {
        // display error message
    showError();
    // from will not be sent
    event.preventDefault();
}
});

function showError() {
    if (email.validity.valueMissing) {
        // field empty = display error
        emailError.textContent = "You need to enter an e-mail address.";
    } 
    else if (email.validity.typeMismatch) 
    {
        emailError.textContent = "Entered value needs to be an e-mail address.";
    }
    else if (email.validity.tooShort) 
    {
    // data too short = error
    emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
}

emailError.className = "error active";
}