import ShareButton from '../components/share-button';
import layout from '../templates/components/fb-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'https://facebook.com/sharer.php',
  classNames: ['fb-share-button', 'share-button'],
  click() {
    let url = this.get('shareURL');
    url += '?display=popup';
    url += '&u=' + encodeURIComponent(this.get('url'));
    url += '&title=' + this.get('title');
    url += '&picture=' + this.get('image');
    url += '&description=' + this.get('text');

    this.openSharePopup(url);
  }
});
