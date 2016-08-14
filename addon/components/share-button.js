import Ember from 'ember';
import layout from '../templates/components/share-button';

export default Ember.Component.extend({
  layout: layout,
  url: '',
  title: '',
  text: '',
  picture: '',

  didInsertElement() {
    this._super(...arguments);
    if (this.get('url') == '') {
      this.set('url', document.location.href);
    }
  }
});
