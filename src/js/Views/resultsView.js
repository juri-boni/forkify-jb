import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  showSortButton() {
    const sortBtn = document.querySelector('[data-dropdown-button]');

    sortBtn.classList.remove('visibility-hidden');
  }

  showDropdown() {
    document.addEventListener('click', e => {
      const isDropdownButton = e.target.matches('[data-dropdown-button]');

      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
        return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
      }

      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
      });
    });
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
