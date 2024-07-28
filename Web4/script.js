function handleSubmit(event) {
    event.preventDefault();
    alert('Form Submitted');

    event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});
