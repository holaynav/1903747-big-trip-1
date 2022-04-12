import {createElement} from '../render.js';

const createSiteTabTemplate = () => '<section class="trip-main__trip-in  fo  trip-info">\
  <div class="trip-info__main">\
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\
    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\
  </div>\
  <p class="trip-info__cost">\
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\
  </p>\
</section>';

export class SiteTabView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createSiteTabTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
