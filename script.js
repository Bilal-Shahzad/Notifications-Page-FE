// When the user clicks markAsReadButton
readButton.addEventListener('click', () => {
    notificationsNumberElement.style.display = 'none';
    notifications.forEach((notification, index) => {
    });
})

// Dark mode toggle
btnThemeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})