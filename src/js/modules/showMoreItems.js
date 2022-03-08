const showMoreItems = (triggerSelector, items) => {
    const cards = document.querySelectorAll(items),
        btn = document.querySelector(triggerSelector);

    cards.forEach(item => item.classList.add('animated', 'fadeInUp'));

    btn.addEventListener('click', () => {
        cards.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        btn.remove();
    });
};

export default showMoreItems;