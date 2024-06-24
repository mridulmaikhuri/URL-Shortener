if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}  

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const requiredInputs = document.querySelectorAll('.required');

    function checkInputs() {
        let allFilled = true;
        requiredInputs.forEach(input => {
            if (input.value === '') {
                allFilled = false;
            }
        });
        submitBtn.disabled = !allFilled;
    }

    requiredInputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    checkInputs(); // Initial check in case inputs are pre-filled
});

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
}

document.getElementById("Generate").addEventListener("click", () => {
    window.location.href = "/"
})
document.getElementById("Analytics").addEventListener("click", () => {
    window.location.href = "/getAnalytics"
})
document.getElementById("Logout").addEventListener("click", () => {
    deleteCookie("uid");
    window.location.href = "/login"
})

document.getElementById("ShortId").addEventListener("click", () => {
    const link = document.getElementById("ShortId").textContent;

    navigator.clipboard.writeText(link)
    .then(() => {
        alert("Link Copied");
    })
})