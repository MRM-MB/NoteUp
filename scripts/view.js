// All the JS used in the view.html

// Description display
function toggleDescription() {
    var description = document.getElementById("description");
    description.classList.toggle("show");
}

// Alert messages
function showAlert(message) {
    var alertBanner = document.getElementById("custom-alert");
    var alertMessage = document.getElementById("custom-alert-message");
    alertMessage.textContent = message;
    alertBanner.style.display = 'block';
    setTimeout(hideAlert, 3500);
}

function hideAlert() {
    var alertBanner = document.getElementById("custom-alert");
    alertBanner.style.display = 'none';
    document.getElementById("custom-alert-message").textContent = '';
}

// Copy information from the container: User, Passsword, Email, Year...
document.addEventListener("DOMContentLoaded", function() {
    const copyTextElements = document.querySelectorAll(".copy-text");
    copyTextElements.forEach(element => {
        element.addEventListener("click", function() {
            const textToCopy = element.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showAlert("✅ Copied");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    });

    hideAlert();

    $('.navbar-toggler').on('click', function() {
        $('#navbarNav').collapse('toggle');
    });


// Check if the user has completed the tour
const tourCompleted = localStorage.getItem('tourCompleted');

if (!tourCompleted) {
    // Using Shepherd.js to create a tour guide for introducing the user to the app
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shepherd-theme-modern',
            scrollTo: true,
            cancelIcon: {
                enabled: true
            },
            arrow: true
        }
    });

    tour.addStep({
        title: '🤖 Getting Started',
        text: 'Welcome to your account! Let\'s go through some key features.',
        attachTo: {
            element: '#step1',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next,
                classes: 'btn btn-primary'
            }
        ]
    });

    tour.addStep({
        title: '🔑 Key Button',
        text: 'Click this button to toggle visibility of sensitive information.',
        attachTo: {
            element: '#step2',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back,
                classes: 'btn btn-secondary'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'btn btn-primary'
            }
        ]
    });

    tour.addStep({
        title: '🖼️ Company Logo',
        text: 'Click on the logo to access customizable backgrounds for that specific company.',
        attachTo: {
            element: '#step3',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back,
                classes: 'btn btn-secondary'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'btn btn-primary'
            }
        ]
    });

    tour.addStep({
        title: '📖 Account Details',
        text: 'These are your account details. You can copy information by clicking on it.',
        attachTo: {
            element: '#step4',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back,
                classes: 'btn btn-secondary'
            },
            {
                text: 'Done',
                action: () => {
                    tour.complete();
                    // Mark the tour as completed in local storage
                    localStorage.setItem('tourCompleted', 'true');
                },
                classes: 'btn btn-primary'
            }
        ]
    });

    tour.start();
}

});

// Glass rectangle overlay to conceal sensitive information, such as passwords or emails
function toggleRectangles() {
    const rectangles = document.querySelectorAll('.cover-rectangle');
    rectangles.forEach(rectangle => {
        rectangle.style.display = rectangle.style.display === 'none' ? 'block' : 'none';
    });
}