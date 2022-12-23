// When the user clicks markAsReadButton
readButton.addEventListener('click', () => {
    notificationsNumberElement.style.display = 'none';
    notifications.forEach((notification, index) => {
    });
})

// Dark mode toggle button
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    }