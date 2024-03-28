// flight infomation 
const flights = [
    { flightNumber: "FL123", departureTime: "10:00 AM", price: 200 },
    { flightNumber: "FL456", departureTime: "02:00 PM", price: 250 },
    { flightNumber: "FL789", departureTime: "06:00 PM", price: 300 }
];

// Display flights
const flightsDiv = document.getElementById('flights');
flights.forEach(flight => {
    const flightElem = document.createElement('div');
    flightElem.classList.add('flight');
    flightElem.innerHTML = `
        <p>Flight Number: ${flight.flightNumber}</p>
        <p>Departure Time: ${flight.departureTime}</p>
        <p>Price: $${flight.price}</p>
    `;
    flightsDiv.appendChild(flightElem);
});

function bookFlight() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const nationality = document.getElementById('nationality').value;

    // Store user details in local storage
    const userDetails = { email, name, surname, age, nationality };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Get selected flight details
    const selectedFlight = document.querySelector('.flight.selected');
    if (!selectedFlight) {
        alert('Please select a flight.');
        return;
    }
    const flightDetails = {
        flightNumber: selectedFlight.querySelector('p:nth-child(1)').innerText.split(": ")[1],
        departureTime: selectedFlight.querySelector('p:nth-child(2)').innerText.split(": ")[1],
        price: selectedFlight.querySelector('p:nth-child(3)').innerText.split(": ")[1]
    };

    // Generate ticket
    const ticketDiv = document.createElement('div');
    ticketDiv.classList.add('ticket');
    ticketDiv.innerHTML = `
        <h2>Ticket</h2>
        <p>Email: ${email}</p>
        <p>Name: ${name}</p>
        <p>Surname: ${surname}</p>
        <p>Age: ${age}</p>
        <p>Nationality: ${nationality}</p>
        <p>Flight Number: ${flightDetails.flightNumber}</p>
        <p>Departure Time: ${flightDetails.departureTime}</p>
        <p>Price: $${flightDetails.price}</p>
    `;
    document.body.appendChild(ticketDiv);

    // Show ticket
    ticketDiv.style.display = 'block';
}

// Add event listener to flights for selection
const flightDivs = document.querySelectorAll('.flight');
flightDivs.forEach(flightDiv => {
    flightDiv.addEventListener('click', () => {
        flightDivs.forEach(div => div.classList.remove('selected'));
        flightDiv.classList.add('selected');
    });
});
