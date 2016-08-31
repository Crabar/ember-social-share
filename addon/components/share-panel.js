import Ember from 'ember';
import layout from '../templates/components/share-panel';

export default Ember.Component.extend({
  layout,
  classNames: ['share-panel'],
  buttonToComponent: {'fb': 'fb-share-button',
                      'facebook': 'fb-share-button',
                      'vk': 'vk-share-button',
                      'vkontakte': 'vk-share-button',
                      'twitter': 'twitter-share-button'},
  buttons: '',
  labels: '',
  adaptive: true,

  components: Ember.computed('buttons', function() {
    const buttons = this.get('buttons').split(',').map((item) => item.trim());
    const labels = this.get('labels').split(',').map((item) => item.trim());
    return buttons.map((item, index) =>
      ({name: this.get('buttonToComponent')[item], label: labels[index]}));
  })
});
