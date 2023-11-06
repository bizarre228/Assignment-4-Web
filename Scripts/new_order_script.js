let sound = new Audio('Sounds/Button_Click.mp3');
document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();
        sound.play();
        if (validateForm()) {
            displayMessage();
        }
    });
});

function validateForm() {
    let isValid = true;

    const orderSelect = document.querySelector('#order .form-select-lg');
    if (orderSelect.value === 'Choose what to order') {
        alert('Please select an item to order.');
        isValid = false;
    }

    const quantitySelect = document.querySelector('#order .form-select-sm');
    if (quantitySelect.value === 'Choose number of furniture') {
        alert('Please select the quantity of furniture.');
        isValid = false;
    }

    const firstName = document.getElementById('fname');
    if (!firstName.value.trim()) {
        alert('Please enter your first name.');
        isValid = false;
    }

    const lastName = document.getElementById('lname');
    if (!lastName.value.trim()) {
        alert('Please enter your last name.');
        isValid = false;
    }

    const email = document.getElementById('email');
    if (!email.value.trim()) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    return isValid;
}

function displayMessage() {
    const orderSelect = document.querySelector('#order .form-select-lg');
    const quantitySelect = document.querySelector('#order .form-select-sm');
    var firstName = document.getElementById('fname').value;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    var lastName = document.getElementById('lname').value;
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    const email = document.getElementById('email').value;

    const message = quantitySelect.options[quantitySelect.selectedIndex].text + " " 
    + orderSelect.options[orderSelect.selectedIndex].text +". Thanks for the order " + 
    lastName + " " + firstName + ". We have send the details to your " + email + " account";

    document.getElementById("userOutput").textContent = "You have successfully ordered " + message;
}
