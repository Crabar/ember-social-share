import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'http://vk.com/share.php',

  actions: {
    share() {
      let url = this.get('shareURL');
      url += '?url=' + encodeURIComponent(this.get('url'));
      url += '&title=' + this.get('title');
      url += '&image=' + this.get('image');
      url += '&description=' + this.get('text');

      this.openSharePopup(url);
    }
  }
});
