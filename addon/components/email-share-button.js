import ShareButton from '../components/share-button';
import layout from '../templates/components/email-share-button';

export default ShareButton.extend({
  layout,
  classNames: ['email-share-button', 'share-button'],
  recipient: ''
});
