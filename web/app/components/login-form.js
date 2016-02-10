import Ember from 'ember';

export default Ember.Component.extend({
  authSrv: Ember.inject.service('authentication'),
  isLoginFailed: false,
  username: '',
  password: '',
  actions: {
    login()
    {
      console.log("Login in progress... " + this.get('username'));
      var self = this;
      self.set('isLoginFailed', false);

      this.get('authSrv').authenticate(this.get('username'),
        this.get('password'),
        null,
        function ()
        {
          self.set('isLoginFailed', true);
        });
    }
  }
});
