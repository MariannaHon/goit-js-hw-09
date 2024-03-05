const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const email = form.elements.email;


const save = () => {
    const data = {
    email: email.value.trim(),
    message: textarea.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const load = () => {
    const saveData = localStorage.getItem('feedback-form-state');
    if (saveData) {
        const { email, message } = JSON.parse(saveData);
        form.elements.email.value = email;
        form.elements.message.value = message;
    }
};

form.addEventListener('input', save);
window.addEventListener('load', load);

form.addEventListener('submit', e => {
    e.preventDefault();
    if (email.value === '') {
        alert('Please enter your email');
    }
    if (textarea.value === '') {
        alert('Please enter your message');
    }
    if (email.value !== '' && textarea.value !== '') {
        localStorage.removeItem('feedback-form-state');
        console.log({
            email: email.value.trim(),
            message: textarea.value.trim(),
        });
        form.reset();
    };
});