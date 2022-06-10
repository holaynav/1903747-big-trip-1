import AbstractView from './abstract-view.js';

const createSiteTabTemplate = (price) => `<section class="trip-main__trip-info  trip-info">\
  <div class="trip-info__main">\
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\
    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\
  </div>\
  <p class="trip-info__cost">\
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>\
  </p>\
</section>`;

export class SiteTabView extends AbstractView {
  #price = 1500;
  get template() {
    return createSiteTabTemplate(this.#price);
  }

  constructor(price) {
    super();
    this.#price = price;
  }
}
