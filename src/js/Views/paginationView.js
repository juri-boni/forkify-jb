import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  //NB _data = model.state.search (passing from controlSearchResults)

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    return `
          <button  data-goto="${
            curPage - 1
          }" class="btn--inline pagination__btn--prev ${
      curPage === 1 ? 'hidden' : ''
    }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>

          <span class="pagination__info-page">Page ${curPage} of ${numPages}</span>
        
          <button  data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next ${
      curPage === numPages ? 'hidden' : ''
    }">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          
          `;
  }
}

export default new PaginationView();
