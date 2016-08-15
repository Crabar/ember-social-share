import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'https://facebook.com/sharer.php',

  actions: {
    share() {
      let url = this.get('shareURL');
      url += '?display=popup';
      url += '&u=' + this.get('url');
      url += '&title=' + this.get('title');
      url += '&picture=' + this.get('image');
      url += '&description=' + this.get('text');

      this.openSharePopup(url);
    }
  }
});
