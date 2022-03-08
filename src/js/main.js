import forms from "./modules/forms";
import modals from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
    let loopSlidesSeconds = 3;
    modals();
    sliders('.main-slider-item', 'vertical', '', '', loopSlidesSeconds);
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', loopSlidesSeconds);
    forms();
});