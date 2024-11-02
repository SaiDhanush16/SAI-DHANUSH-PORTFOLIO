// Function to display greeting based on current time
function getGreeting() {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning🌄';
    } else if (hour < 18) {
        greeting = 'Good Afternoon🌞';
    } else {
        greeting = 'Good Evening🌇';
    }
    
    document.getElementById('greetingMessage').innerText = greeting;
}

document.addEventListener("DOMContentLoaded", function() {
    getGreeting(); // Display greeting

    const sectionTitles = document.querySelectorAll('.section-title');
    const contentPopups = document.querySelectorAll('.content-popup');
    const overlay = document.getElementById('overlay');

    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section') + 'Content';

            contentPopups.forEach(content => content.classList.remove('active')); // Hide all content
            overlay.classList.add('active'); // Show overlay

            document.getElementById(sectionId).classList.add('active'); // Show selected content

            // Close popup when clicking outside
            overlay.onclick = function() {
                overlay.classList.remove('active'); // Hide overlay
                contentPopups.forEach(content => content.classList.remove('active')); // Hide all content
            };
        });
    });
});
