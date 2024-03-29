const modals = () => {
    let btnPressed;

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal');

        function showModal() {
            modal.classList.add('show');
            document.body.classList.add('modal-open');
        };

        function closeModal() {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        };

        trigger.forEach(btn => {
            btn.addEventListener('click', e => {
                const target = e.target;

                if (target) {
                    e.preventDefault();
                };

                btnPressed = true;

                if (destroy) {
                    btn.remove();
                }

                windows.forEach(item => item.classList.remove('show'));
                
                showModal();
            });
        });

        close.addEventListener('click', () => {
            closeModal();
            windows.forEach(item => item.classList.remove('show'));
        });

        modal.addEventListener('click', e => {
            const target = e.target;

            if (target === modal && closeClickOverlay) {
                windows.forEach(item => item.classList.remove('show'));
                closeModal();
            }
        });
    };

    function showModalByTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector);
        
        setTimeout(() => {
            let state;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    state = true;
                };
            });

            if (!state) {
                modal.classList.add('show');
                document.body.classList.add('modal-open');
            };
        }, time);
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            };
        })
    };

    bindModal('.button-order.button-design', '.popup-design', '.popup-design .popup-close', false);
    bindModal('.button-order.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true, true);
    showModalByTime('.popup-consultation', 60000);
    openByScroll('.fixed-gift');
};

export default modals;