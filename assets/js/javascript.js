const subscribe = document.getElementById('subscribe');
const subscribeInvalid = document.getElementById('subscribe__invalid');
const subscribeInput = document.getElementById('subscribe__input');
const subscribeSubmit = document.getElementById('subscribe__submit');

const message = document.getElementById('message');
const messageEmail = document.getElementById('message__email');
const messageBtnDismiss = document.getElementById('message__btn-dismiss');

const EMAIL_REGEX = /^(?!\.)(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._%+-]+@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/;

subscribeSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let email = subscribeInput.value;

    if (EMAIL_REGEX.test(email)) {
        subscribe.classList.add('hidden');
        message.classList.remove('hidden');

        subscribeInvalid.classList.add('hidden');
        subscribeInput.classList.remove('subscribe__input--invalid');

        messageEmail.textContent = email;
        subscribeInput.value = '';
    } else {
        subscribeInvalid.classList.remove('hidden');
        subscribeInput.classList.add('subscribe__input--invalid');
    }
});

messageBtnDismiss.addEventListener('click', () => {
    subscribe.classList.remove('hidden');
    message.classList.add('hidden');
})