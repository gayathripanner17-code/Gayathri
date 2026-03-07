document.getElementById("registrationForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let workshop = document.getElementById("workshop").value;

    let mode = "";
    if(document.getElementById("online").checked) mode = "Online";
    if(document.getElementById("offline").checked) mode = "Offline";

    let confirmChecked = document.getElementById("confirm").checked;

    if(name=="" || email=="" || phone=="" || mode=="" || !confirmChecked){
        alert("Please fill all fields and confirm information.");
        return;
    }

    // Add new participant to table
    let table = document.querySelector(".participants table");
    let newRow = table.insertRow(-1);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = phone;
    newRow.insertCell(3).innerText = workshop;
    newRow.insertCell(4).innerText = mode;

    alert("Registration Successful!");

    // Reset the form
    document.getElementById("registrationForm").reset();
});
