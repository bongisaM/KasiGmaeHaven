// Data structure to store winners
const winners = {
    January: {
        name: "John Doe",
        location: "Philippi",
        image: "winner-january.jpg", // Replace with actual image path
    },
    March: {
        name: "Jane Smith",
        location: "Khayelitsha",
        image: "winner-march.jpg", // Replace with actual image path
    },
    June: {
        name: "Mike Johnson",
        location: "Philippi Village",
        image: "winner-june.jpg", // Replace with actual image path
    },
    September: {
        name: "Emily Davis",
        location: "Khayelitsha",
        image: "winner-september.jpg", // Replace with actual image path
    },
    November: {
        name: "Chris Brown",
        location: "Philippi",
        image: "winner-november.jpg", // Replace with actual image path
    },
};

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input values
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    // Add new entry to the table
    const table = document.getElementById("signup-table").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${surname}</td><td>${phone}</td><td>${location}</td>`;

    // Clear the form
    document.getElementById("signup-form").reset();
});

document.getElementById("winner-month").addEventListener("change", function() {
    const selectedMonth = this.value;
    const winner = winners[selectedMonth];

    // Display winner information
    if (winner) {
        document.getElementById("winner-name").innerText = `Congratulations ${winner.name} from ${winner.location} for winning the ${selectedMonth} tournament!`;
        document.getElementById("winner-pic").src = winner.image;
        document.getElementById("winner-pic").style.display = "block";
        document.getElementById("winner-info").style.display = "block";
    }
});
