document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('JoinForm');

    function validateForm(event) {
        event.preventDefault();
        console.log("Form submitted!"); // Check if the event listener is triggered
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const mobileInput = document.getElementById('number').value.trim();
        const ministrySelect = document.getElementById('ministry').value.trim();
        const noteTextarea = document.getElementById('note').value.trim();

        try {
            if (nameInput === "") {
                throw new Error("Name is required");
            }
            if (emailInput === "") {
                throw new Error("Email is required");
            }
            if (mobileInput === "") {
                throw new Error("Mobile number is required");
            }
            if (ministrySelect === "Select A Ministry") {
                throw new Error("Please select a ministry");
            }

            // If no errors, show success message and reset the form
            alert("Joining successful! Thank you for your interest.");
            form.reset();
        } catch (error) {
            alert(error.message);
        }
    }

    if (form) {
        form.addEventListener("submit", validateForm);
    }
});