const userInput = document.querySelector('[name="text"]');
const button = document.querySelector('.btn');
const qrImg = document.querySelector('.code');




button.addEventListener('click', e => {
    e.preventDefault();

    
    if (userInput.value.length > 0) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value.trim()}`;
        qrImg.classList.remove('d-none');
    }else {
        userInput.classList.add('error');
        setTimeout(() => {
            userInput.classList.remove('error');
        },1000);
    }
})