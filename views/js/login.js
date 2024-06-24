if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
} 

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
        
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then (response => response.json())
    .then (data => {
        if (data.success) {
            window.location.href = "/";
        } else {
            alert("Invalid email or password")
        }
    })
    .catch(err => {
        console.log(err);
    })
})

document.getElementById("Signup").addEventListener("click", () => {
    window.location.href = "/signup";
})