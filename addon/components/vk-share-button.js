import ShareButton from '../components/share-button';
import layout from '../templates/components/vk-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'http://vk.com/share.php',
  classNames: ['vk-share-button'],
  click() {
    let url = this.get('shareURL');
    url += '?url=' + encodeURIComponent(this.get('url'));
    url += '&title=' + this.get('title');
    url += '&image=' + this.get('image');
    url += '&description=' + this.get('text');

    this.openSharePopup(url);
  }
});
