document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ContactForm');

    function validateForm(event) {
        event.preventDefault();
        console.log("Form submitted!"); // Check if the event listener is triggered
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const subjectInput = document.getElementById('subject').value.trim();
        const messageTextarea = document.getElementById('message').value.trim();

        try {
            if (nameInput === "") {
                throw new Error("Name is required");
            }
            if (emailInput === "") {
                throw new Error("Email is required");
            }
            if (subjectInput === "") {
                throw new Error("Subject is required");
            }
            if ( messageTextarea === "Select A Ministry") {
                throw new Error("Please select a ministry");
            }

            // If no errors, show success message and reset the form
            alert("Message sent. We will reach you at your email. Thank you!");
            form.reset();
        } catch (error) {
            alert(error.message);
        }
    }

    if (form) {
        form.addEventListener("submit", validateForm);
    }
});