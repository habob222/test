const signupButton = document.getElementById('signupButton');
    const signupForm = document.getElementById('signupForm');

    // Add event listener to show the signup form when the button is clicked
    signupButton.addEventListener('click', () => {
      signupForm.style.display = 'block'; // Show the form
      signupButton.style.display = 'none'; // Hide the button
    });