import Ember from 'ember';

export default Ember.Component.extend({
  authSrv: Ember.inject.service('authentication'),
  pending: false,
  inputUsername: '',
  inputPassword: '',
  errorMessage: '',
  actions: {
    login()
    {
      var self = this;
      this.set('errorMessage', '');
      var username = this.get('inputUsername');
      var password = this.get('inputPassword');

      console.log("HERE");
      this.sendAction("login");
      /**
       * Lets ignore the authenticate login and simply try
       * to propagate the call to the route.
       */
      return;
      if (username.length === 0 || password.length === 0)
      {
        this.set('errorMessage', 'Username and password are required.');
        return;
      }

      this.set('pending', true);
      this.get('authSrv').authenticate(username, password,
        function ()
        {
          self.set('pending', false);
          // In real case we'd like to transition when
          // we reach this point.
        },
        function (status, msg)
        {
          self.set('pending', false);
          if (msg)
            self.set('errorMessage', 'Auth failure [' + status + ']: ' + msg);
          else
            self.set('errorMessage', 'Auth failure [' + status + ']');
        });
    }
  }
});
