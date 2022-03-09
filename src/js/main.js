import checkTextInputs from "./modules/checkTextInputs";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreItems from "./modules/showMoreItems";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
    let loopSlidesSeconds = 3;
    modals();
    sliders('.main-slider-item', 'vertical', '', '', loopSlidesSeconds);
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', loopSlidesSeconds);
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreItems('.button-styles', '#styles .grid-col');
});