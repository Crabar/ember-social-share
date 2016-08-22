import ShareButton from '../components/share-button';
import layout from '../templates/components/twitter-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'https://twitter.com/intent/tweet',
  classNames: ['twitter-share-button', 'share-button'],
  hashtags: '',
  click() {
    let url = this.get('shareURL');
    url += '?text=' + this.get('title');
    url += '&url=' + encodeURIComponent(this.getCurrentUrl());
    url += this.get('hashtags') ? '&hashtags=' + this.get('hashtags') : '';
    url += this.get('via') ? '&via=' + this.get('via') : '';

    this.openSharePopup(url);
  }
});
