const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/events', (req, res) => {
    const { eventName, eventDate, eventDescription } = req.body;
    // Here you would save the event details to a database
    console.log('Event Details:', { eventName, eventDate, eventDescription });
    res.json({ message: 'Event details saved successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.querySelector('.events-container');

    const upcomingEvents = [
        {
            title: "TechFest 2024",
            date: "March 15, 2024",
            description: "A technology festival showcasing innovative projects, guest lectures, and coding competitions.",
            organizer: "John Doe (Faculty)"
        },
        {
            title: "Cultural Night",
            date: "April 5, 2024",
            description: "A night filled with music, dance, and theatrical performances by students from all departments.",
            organizer: "Jane Smith (Student)"
        },
        {
            title: "Sports Meet",
            date: "May 20, 2024",
            description: "A day dedicated to various sports competitions and physical activities to promote fitness.",
            organizer: "Athletic Committee"
        }
    ];

    upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h2 class="event-title">${event.title}</h2>
            <p class="event-date"><strong>Date:</strong> ${event.date}</p>
            <p class="event-description">${event.description}</p>
            <p class="event-organizer"><strong>Organizer:</strong> ${event.organizer}</p>
        `;
        eventsContainer.appendChild(eventCard);
    });
});

