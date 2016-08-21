import ShareButton from '../components/share-button';
import layout from '../templates/components/vk-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'http://vk.com/share.php',
  classNames: ['vk-share-button', 'share-button'],
  click() {
    let url = this.get('shareURL');
    url += '?url=' + encodeURIComponent(this.getCurrentUrl());
    url += this.get('title') ? '&title=' + this.get('title') : '';
    url += this.get('image') ? '&image=' + this.get('image') : '';
    url += this.get('text') ? '&description=' + this.get('text') : '';

    this.openSharePopup(url);
  }
});
