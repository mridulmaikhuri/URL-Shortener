document.getElementById("login").addEventListener("click", () => {
    window.location.href = "/login"
})

document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success === true) {
            window.location.href = "/";
        } else {
            alert("Email Already exists");
        }
    })

})