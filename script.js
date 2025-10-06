document.addEventListener('DOMContentLoaded', function() {
    // ⚠️ CRITICAL: Replace this placeholder with the actual, final destination URL.
    // This is the link users are taken to *after* the age check.
    const finalDestinationLink = 'https://otieu.com/4/9864510';

    // Get the buttons by their ID
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');

    // Function to handle the redirection
    function redirectToFinalDestination() {
        // Navigates the current browser window to the final link
        window.location.href = finalDestinationLink;
    }

    // Both buttons now redirect to the secret, final link
    yesButton.addEventListener('click', redirectToFinalDestination);
    noButton.addEventListener('click', redirectToFinalDestination);
});
