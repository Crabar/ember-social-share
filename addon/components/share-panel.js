import Ember from 'ember';
import layout from '../templates/components/share-panel';

export default Ember.Component.extend({
  layout,
  classNames: ['share-panel'],
  buttonToComponent: {'fb': 'fb-share-button',
                      'facebook': 'fb-share-button',
                      'vk': 'vk-share-button',
                      'vkontakte': 'vk-share-button',
                      'twitter': 'twitter-share-button',
                      'linkedin': 'linkedin-share-button',
                      'gplus': 'gplus-share-button',
                      'email': 'email-share-button',
                      'e-mail': 'email-share-button',
                  },
  buttons: '',
  labels: '',
  adaptive: true,

  components: Ember.computed('buttons', function() {
    const buttons = this.splitData(this.get('buttons'));
    const labels = this.splitData(this.get('labels'));
    return buttons.map((item, index) =>
      ({name: this.get('buttonToComponent')[item], label: labels[index]}));
  }),

  splitData(data) {
    return data.split(',').map((item) => item.trim());
  }
});
