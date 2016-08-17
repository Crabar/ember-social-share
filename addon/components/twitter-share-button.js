import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'https://twitter.com/intent/tweet',
  classNames: ['twitter-share-button'],
  hashtags: '',
  click() {
    let url = this.get('shareURL');
    url += '?text=' + this.get('title');
    url += '&url=' + encodeURIComponent(this.get('url'));
    url += '&hashtags=' + this.get('hashtags');

    this.openSharePopup(url);
  }
});
