// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    for (const [key, value] of params.entries()) {
        data[key] = value; // Store each key-value pair in an object
    }
    return data;
}

// Populate the form fields with the data from query parameters
function populateSignupForm() {
    const formData = getQueryParams();

    // Populate the fields dynamically
    if (formData.name) document.getElementById("name").value = formData.name;
    if (formData.email) document.getElementById("email").value = formData.email;
    if (formData.phone) document.getElementById("phone").value = formData.phone;
    if (formData.date) document.getElementById("date").value = formData.date;
    if (formData.time) document.getElementById("time").value = formData.time;
    if (formData.department) document.getElementById("department").value = formData.department;
    if (formData.doctor) document.getElementById("doctor").value = formData.doctor;
    if (formData.message) document.getElementById("message").value = formData.message;
    if (formData.insurance) document.getElementById("insurance").value = formData.insurance;

    if (formData.block) document.getElementById("block").value = formData.block;
    if (formData.street) document.getElementById("street").value = formData.street;
    if (formData.city) document.getElementById("city").value = formData.city;
    if (formData.state) document.getElementById("state").value = formData.state;
    if (formData.zip) document.getElementById("zip").value = formData.zip;
}

// Call the function when the page loads
window.addEventListener("load", populateSignupForm);