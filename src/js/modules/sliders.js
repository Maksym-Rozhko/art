const sliders = (slidesSelector, direction, prevSelector, nextSelector, loopSeconds) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slidesSelector);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = items.length;
        };

        items.forEach(item => {
            item.classList.add('animated');
            item.classList.add('hide');
        });

        items[slideIndex - 1].classList.remove('hide');
    };

    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex += n);
    }; 

    try {
        const prevBtn = document.querySelector(prevSelector),
            nextBtn = document.querySelector(nextSelector);

        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (err) {};

    function activateAnimation () {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, Number(`${loopSeconds}000`));
        } else {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, Number(`${loopSeconds}000`));
        };
    };
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;