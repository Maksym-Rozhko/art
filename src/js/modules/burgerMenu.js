const burgerMenu = (menuSelector, burgerBtnSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerBtnSelector);

    menuElem.classList.add('animated', 'slideInLeft');

    burgerElem.addEventListener('click', () => {
        if (window.screen.availWidth < 993) {
            menuElem.classList.toggle('show');
        };
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 993) {
            menuElem.classList.remove('show');
        };
    });
};

export default burgerMenu;