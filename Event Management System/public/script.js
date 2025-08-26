document.addEventListener("DOMContentLoaded", function () {
    const eventForm = document.getElementById("eventForm");
    const messageDiv = document.getElementById("message");

    let eventData = null;  // Declare the variable globally

    eventForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const eventName = document.getElementById("eventName").value.trim();
        const eventDate = document.getElementById("eventDate").value;
        const eventDescription = document.getElementById("eventDescription").value.trim();
        const organiserCategory = document.querySelector('input[name="organiser"]:checked');
        const organiserName = document.getElementById("organiserName").value.trim();
        const organiserEmail = document.getElementById("organiserEmail").value.trim();
        const organiserContact = document.getElementById("organiserContact").value.trim();
        const department = document.getElementById("department").value.trim();

        if (!eventName || !eventDate || !eventDescription || !organiserCategory || !organiserName || !organiserContact || !department) {
            messageDiv.innerHTML = "<p style='color: red;'>Please fill out all fields before submitting the form.</p>";
            messageDiv.style.display = "block";
            return;
        }

        // Create the event data object
        eventData = {
            eventName: eventName,
            eventDate: eventDate,
            eventDescription: eventDescription,
            organiserCategory: organiserCategory.value,
            organiserName: organiserName,
            organiserEmail: organiserEmail,
            organiserContact: organiserContact,
            department: department
        };

        // Simulate form submission (this can be an API call to your server)
        console.log("Event Data Submitted:", eventData);

        // Display a success message
        messageDiv.innerHTML = "<p style='color: green;'>Event registered successfully!</p>";
        messageDiv.style.display = "block";

        // Optionally, reset the form
        eventForm.reset();

        // Call SendEmail() here to send the data after submission
        const emailBody = `
        <h3>New Event Registration</h3>
        <p><strong>Event Name:</strong> ${eventData.eventName}</p>
        <p><strong>Event Date:</strong> ${eventData.eventDate}</p>
        <p><strong>Description:</strong> ${eventData.eventDescription}</p>
        <p><strong>Organiser Category:</strong> ${eventData.organiserCategory}</p>
        <p><strong>Organiser Name:</strong> ${eventData.organiserName}</p>
        <p><strong>Organiser Email:</strong> ${eventData.organiserEmail}</p>
        <p><strong>Contact:</strong> ${eventData.organiserContact}</p>
        <p><strong>Department:</strong> ${eventData.department}</p>
    `;
        SendEmail(emailBody);  // Pass eventData to SendEmail
    });

    const inputFields = document.querySelectorAll("input, textarea");
    inputFields.forEach(function (field) {
        field.addEventListener("input", function () {
            messageDiv.style.display = "none";
        });
    });
});

// Function to send the email
// Function to send the email
function SendEmail(emailBody) {
    // Log the email body to verify it's populated
    console.log("Email Body:", emailBody);

    // Check if the emailBody is actually being passed correctly
    if (!emailBody || emailBody.trim() === "") {
        console.error("Email body is empty or undefined.");
        alert("Email body is missing. Please check the form data.");
        return;
    }

    // Send email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "festify.org@gmail.com",
        Password: "37484D292913B5E8F7C0FA67FB689682354B", // Make sure the password is correct
        To: 'akritic206@example.com', // Replace with actual recipient
        From: "festify.org@gmail.com",
        Subject: "New Event Registration",
        Body: emailBody // Send the dynamic email body
    }).then(
        message => {
            console.log(message); // Log success message
            alert("Email sent successfully!"); // Notify the user on success
        },
        error => {
            console.error("Failure sending mail:", error); // Log error
            alert("There was an error sending the email.");
        }
    );
}

