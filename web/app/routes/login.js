import Ember from 'ember';

export default Ember.Route.extend({
  authSrv: Ember.inject.service('authentication'),
  actions: {
    onLoginSuccess: function ()
    {
      this.transitionTo('index');
    }
  },
  beforeModel()
  {
    this.get('authSrv');
  }
});
