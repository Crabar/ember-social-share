import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'https://twitter.com/intent/tweet',
  hashtags: '',

  actions: {
    share() {
      let url = this.get('shareURL');
      url += '?text=' + this.get('title');
      url += '&url=' + encodeURIComponent(this.get('url'));
      url += '&hashtags=' + this.get('hashtags');

      this.openSharePopup(url);
    }
  }
});
