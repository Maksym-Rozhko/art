import { getResources } from "../services/requests";

const showMoreItems = (triggerSelector, wrapper) => {
    const btn = document.querySelector(triggerSelector);

    function createCard(response) {
        response.forEach(({ src, title, link }) => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="${title}">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).append(card);
        });
    };
    
    btn.addEventListener('click', () => {
        getResources('http://localhost:3000/styles')
            .then(res => createCard(res))
            .catch(error => console.log(error));

        btn.remove();
    });
};

export default showMoreItems;