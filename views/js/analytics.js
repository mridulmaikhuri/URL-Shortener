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