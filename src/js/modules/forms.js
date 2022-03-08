// import checkNumInputs from './checkNumInputs';

const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        uploadInputs = document.querySelectorAll('[name="upload"]');

    // checkNumInputs('input[name="user_phone"');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    };
    
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };

    const clearFormInputs = () => {
        inputs.forEach(input => input.value = '');
        uploadInputs.forEach(input => input.previousElementSibling.textContent = 'Файл не выбран');
    };

    uploadInputs.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 6 ? dots = '...' : dots = '.';

            const name = arr[0].substring(0, 6) + dots + arr[1];
            
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
               item.classList.add('hide'); 
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.src = message.spinner;
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.append(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.append(textMessage);

            const formData = new FormData(item);
            let api;

            item.closest('.popup-design') || item.classList.contains('form_calc') ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(res => {
                    // console.log(res);
                    statusImg.src = message.ok;
                    textMessage.textContent = message.success;
                    statusMessage.classList.add('success');
                })
                .catch(() => {
                    statusImg.src = message.fail;
                    textMessage.textContent = message.failure;
                    statusMessage.classList.add('failure');
                })
                .finally(() => {
                    clearFormInputs();
                    
                    setTimeout(() => {
                        statusMessage.remove();
                        item.classList.remove('hide', 'fadeOutUp');
                        item.classList.add('fadeInUp');
                        document.body.classList.remove('modal-open');
                    }, 5000);
                })
        });
    });
};

export default forms;