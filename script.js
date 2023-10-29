// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // You can add your form submission logic here, such as AJAX requests.

        // Example: 
        // const formData = new FormData(contactForm);
        // fetch('your-api-endpoint', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => {
        //     // Handle the response as needed
        // })
        // .catch(error => {
        //     console.error(error);
        // });
    });
});
