import Ember from 'ember';
import layout from '../templates/components/share-button';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  url: '',
  title: '',
  text: '',
  image: '',

  didInsertElement() {
    this._super(...arguments);
    if (this.get('url') === '') {
      this.set('url', document.location.href);
    }
  },

  getPopupPosition() {
    const dualScreenLeft = screen.availLeft;
    const dualScreenTop = screen.availTop;

    const windowWidth = screen.availWidth;
    const windowheight =  screen.availHeight;

    const left = ((windowWidth / 2) - (600 / 2)) + dualScreenLeft;
    const top = ((windowheight / 2) - (600 / 2)) + dualScreenTop;

    return {left: left, top: top};
  },

  openSharePopup(url) {
    let popupPosition = this.getPopupPosition();
    var newWindow = window.open(url, 'Facebook',
    'location=no,toolbar=no,menubar=no,scrollbars=no,status=no, width=600, height=600, top=' + popupPosition.top + ', left=' + popupPosition.left);

    if (window.focus) {
      newWindow.focus();
    }
  }
});
