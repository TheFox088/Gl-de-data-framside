document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    let form = document.querySelector('form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values from the form fields
        let rating = document.getElementById('yourInput').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        // Log the values to the console
        console.log("Din vudering: " + rating);
        console.log("Navn: " + name);
        console.log("E-post: " + email);

        // You can also send this data to a server using AJAX if needed

        // Reset the form if necessary
        form.reset();
    });
});