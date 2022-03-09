const filterTabs = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        wrapAll = wrapper.querySelectorAll('.all'),
        wrapLovers = wrapper.querySelectorAll('.lovers'),
        wrapChef = wrapper.querySelectorAll('.chef'),
        wrapGirl = wrapper.querySelectorAll('.girl'),
        wrapGuy = wrapper.querySelectorAll('.guy'),
        noPortfolio = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        wrapAll.forEach(mark => {
            mark.classList.add('hide');
            mark.classList.remove('animated', 'fadeInUp');
        });

        noPortfolio.classList.add('hide');
        noPortfolio.classList.remove('show', 'animated', 'fadeInUp');

        if (markType) {
            markType.forEach(mark => {
                mark.classList.remove('hide');
                mark.classList.add('animated', 'fadeInUp');
            });
        } else {
            noPortfolio.classList.remove('hide');
            noPortfolio.classList.add('show', 'animated', 'fadeInUp');
        }
    };

    const handlerBtn = (btn, wrap) => {
        btn.addEventListener('click', () => typeFilter(wrap));
    };

    handlerBtn(btnAll, wrapAll);
    handlerBtn(btnLovers, wrapLovers);
    handlerBtn(btnChef, wrapChef);
    handlerBtn(btnGirl, wrapGirl);
    handlerBtn(btnGuy, wrapGuy);
    handlerBtn(btnGrandmother);
    handlerBtn(btnGranddad);

    menu.addEventListener('click', e => {
        let target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));

            target.classList.add('active');
        }
    });
};

export default filterTabs;