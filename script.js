// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showPopup("Right Click is disabled");
});

// Disable Ctrl+U, F12, and Fn+F12
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "u") || e.key === "F12" || (e.key === "F12" && e.key === "Control")) {
        e.preventDefault();
        showPopup("Inspection or viewing source is disabled.");
    }
});

// Function to show the pop-up
function showPopup(message) {
    var popupContainer = document.getElementById("popup-container");
    var popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popupContainer.style.display = "block";
    // Fade out after 1 second
    setTimeout(function () {
        popupContainer.style.opacity = 0;
        setTimeout(function () {
            popupContainer.style.display = "none";
            popupContainer.style.opacity = 1;
        }, 1000);
    }, 2000);
}
