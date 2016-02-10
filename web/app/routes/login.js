import Ember from 'ember';

export default Ember.Route.extend({
  authSrv: Ember.inject.service('authentication'),

  beforeModel()
  {
    "use strict";
    var self = this;
    var promise_or_ret = this.get('authSrv').isLoggedIn();

    if (promise_or_ret === true)
    {
      self.transitionTo('index');
      return;
    }
    else if (promise_or_ret === false)
      return;

    promise_or_ret.then(function ()
    {
      self.transitionTo('index');
    }, function ()
    {
      // Error means not logged in so we display this page.
    });
    return promise_or_ret;
  }
});
