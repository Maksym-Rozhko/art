const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round((sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        const promoMessage = document.createElement('p');
        promoMessage.classList.add('promo-message');    

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = `Всего: ${Math.round(sum * 0.7)} руб.`;
            resultBlock.prepend(promoMessage);
            promoMessage.textContent = `Ваша скидка ${sum - Math.round(sum * 0.7)} руб.`;
        } else {
            resultBlock.textContent = `Всего: ${sum} руб.`;
            resultBlock.classList.add('accent');
        };
    };

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;