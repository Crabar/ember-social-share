import ShareButton from '../components/share-button';
import layout from '../templates/components/reddit-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'http://www.reddit.com/submit',
  classNames: ['reddit-share-button', 'share-button'],

  click() {
    let url = this.get('shareURL');
    url += '?url=' + encodeURIComponent(this.getCurrentUrl());
    url += this.get('title') ? '&title=' + this.get('title') : '';

    this.openSharePopup(url);
  },
});
