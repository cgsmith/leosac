import Ember from 'ember';
import LeosacRoute from '../leosac-route';

export default LeosacRoute.extend({
    authSrv: Ember.inject.service('authentication'),
    systemOverview: Ember.inject.service('system-overview'),
    logManager: Ember.inject.service('log-manager'),
    _title: 'System Overview',
    _requireAuth: true,
    actions:
    {
        refresh()
        {
            "use strict";
            this.get('systemOverview').update();
            this.refresh();
        }
    },
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
        return Ember.RSVP.hash({
            lastLogs: this.get('logManager').lastLogs(10)
        });
    }
});
