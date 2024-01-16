function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display thank you message
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    thankYouMessage.style.color = green;
    document.getElementById('contact-form').appendChild(thankYouMessage);

    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
}