// Welcome Name
let userName = prompt("Enter your name:");
if (userName != "" && userName != null) {
    document.getElementById("welcomeText").innerText = 
        "Hi " + userName + ", Welcome To Website";
}

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("userMessage").value;

    if (name == "" || email == "" || phone == "" || message == "") {
        alert("All fields must be filled!");
        return;
    }

    document.getElementById("resultBox").innerHTML = `
        <h3>Submitted Data:</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
    `;
});