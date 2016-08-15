import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'http://vk.com/share.php',

  actions: {
    share() {
      let url = this.get('shareURL');
      url += '?url=' + this.get('url');
      url += '&title=' + this.get('title');
      url += '&image=' + this.get('picture');
      url += '&description=' + this.get('text');

      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      var left = ((width / 2) - (600 / 2)) + dualScreenLeft;
      var top = ((height / 2) - (600 / 2)) + dualScreenTop;
      var newWindow = window.open(url, 'VKontakte', 'location=no,toolbar=no,menubar=no,scrollbars=no,status=no, width=600, height=600, top=' + top + ', left=' + left);

      if (window.focus) {
        newWindow.focus();
      }
    }
  }
});
