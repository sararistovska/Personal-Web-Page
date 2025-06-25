
// Splash Screen Loader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


// Contact Form Submission Feedback
const form = document.querySelector('.contact-form');
const confirmation = document.querySelector('.form-confirmation');

if (form && confirmation) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        confirmation.style.display = 'block';
        setTimeout(() => {
            confirmation.style.display = 'none';
            form.reset();
        }, 3000);
    });
}


// Email Copy with Floating Popup
const emailCopy = document.querySelector('.email-copy');

if (emailCopy) {
    const popup = document.createElement('div');
    popup.classList.add('copy-popup');
    popup.textContent = 'Email copied!';
    document.body.appendChild(popup);

    emailCopy.addEventListener('click', () => {
        const emailText = 'sararis@gmail.com';
        navigator.clipboard.writeText(emailText).then(() => {
            const rect = emailCopy.getBoundingClientRect();
            popup.style.left = `${rect.left + rect.width / 2}px`;
            popup.style.top = `${rect.bottom + window.scrollY + 8}px`;
            popup.style.display = 'block';
            popup.style.opacity = '1';

            setTimeout(() => {
                popup.style.opacity = '0';
                popup.style.display = 'none';
            }, 2000);
        });
    });
}


// Smooth Scroll for In-Page Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Inspiration Submission Popup
const inspSubmitBtn = document.getElementById('inspiration-submit-btn');
const inspTextarea = document.getElementById('user-inspiration-input');
const inspPopup = document.getElementById('inspiration-popup'); // Ensure this exists
const confirmationMsg = document.getElementById('inspiration-confirmation');

if (inspSubmitBtn && inspTextarea) {
    inspSubmitBtn.addEventListener('click', () => {
        const text = inspTextarea.value.trim();
        if (text.length === 0) {
            alert('Write a spark of inspiration before you send it off 🕊️');
            return;
        }

        inspTextarea.value = '';

        if (inspPopup) inspPopup.classList.add('show');
        if (confirmationMsg) confirmationMsg.style.display = 'block';

        setTimeout(() => {
            if (inspPopup) inspPopup.classList.remove('show');
            if (confirmationMsg) confirmationMsg.style.display = 'none';
        }, 3000);
    });
}
