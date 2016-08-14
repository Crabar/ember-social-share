import Ember from 'ember';
import ShareButton from '../components/share-button';
import layout from '../templates/components/facebook-share-button';

export default Ember.Component.extend(ShareButton, {
  layout: layout,
  appId: '',
  shareURL: 'https://facebook.com/dialog/share',

  actions: {
    share() {
      let url = shareURL;
      url += '?app_id' + this.get('appId');
      url += '&display=popup';
      url += '&href=' + this.get('url');
      url += '&title=' + this.get('title');
      url += '&picture=' + this.get('picture');
      window.open(url, '', 'location=no,toolbar=no,menubar=no,scrollbars=no,status=no');
    }
  }
});
