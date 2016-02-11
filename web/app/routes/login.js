import Ember from 'ember';

export default Ember.Route.extend({
  authSrv: Ember.inject.service('authentication'),
  actions: {
    login: function ()
    {
      alert("Route action handler");
    }
  },
  beforeModel()
  {
    this.get('authSrv');
  }
});
