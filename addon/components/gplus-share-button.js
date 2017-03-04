import ShareButton from '../components/share-button';
import layout from '../templates/components/gplus-share-button';

export default ShareButton.extend({
  layout,
  shareURL: '//plus.google.com/share',
  classNames: ['gplus-share-button', 'share-button'],
  click() {
    let url = this.get('shareURL');
    url += '?url=' + encodeURIComponent(this.getCurrentUrl());
    this.openSharePopup(url);
  }
});
