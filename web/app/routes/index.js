import Ember from 'ember';

export default Ember.Route.extend({
    authSrv: Ember.inject.service('authentication'),
    actions:
    {
        // Logout will only work from index route... which is bad.
        // Don't know how to fix it for now.
        onLogout()
        {
            "use strict";
            this.transitionTo('login');
        }
    },
    beforeModel()
    {
        "use strict";
        var self = this;
        var promise_or_ret = this.get('authSrv').isLoggedIn();

        if (promise_or_ret === false)
        {
            self.transitionTo('login');
            return;
        }
        else if (promise_or_ret === true)
        {
            return;
        }

        promise_or_ret.then(function ()
        {
            // success, do nothing and let user reach page
        }, function ()
        {
            self.transitionTo('login');
        });
        return promise_or_ret;
    },

    model() {
        "use strict";
    }
});
