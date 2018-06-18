import Ember from 'ember';
import ShareButton from '../components/share-button';
import layout from '../templates/components/fb-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'https://facebook.com/sharer.php',
  classNames: ['fb-share-button', 'share-button'],

  hashtag: Ember.computed('hashtags', function() {
    if (this.get('hashtags')) {
      let firstTag = this.get('hashtags').split(',').shift();
      return encodeURIComponent(`#${firstTag}`);
    }
  }),

  buildUrl() {
    let quote = this.get('quote') ? `&quote=${this.get('quote')}` : '';
    let hashtag = this.get('hashtag') ? `&hashtag=${this.get('hashtag')}` : '';
    let currentUrl = encodeURIComponent(this.getCurrentUrl());
    let url = `${this.get('shareURL')}?display=popup&u=${currentUrl}${hashtag}${quote}`;
    return url;
  },

  click() {
    let url = this.buildUrl();
    this.openSharePopup(url);
  }
});
