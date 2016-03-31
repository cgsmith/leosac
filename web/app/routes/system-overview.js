import Ember from 'ember';
import LeosacRoute from '../leosac-route';

export default LeosacRoute.extend({
    authSrv: Ember.inject.service('authentication'),
    systemOverview: Ember.inject.service('system-overview'),
    logManager: Ember.inject.service('log-manager'),
    _title: 'System Overview',
    _requireAuth: true,

    numLastLogs: 10,
    showLastLog: false,
    testLol: Ember.computed('showLastLog', function ()
    {
        "use strict";
        return true;
    }),
    actions:
    {
        refresh()
        {
            "use strict";
            this.get('systemOverview').update();
        },
        updateLogView(n)
        {
            "use strict";
            this.set('numLastLogs', Number(n));
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
            lastLogs: this.get('logManager').lastLogs(this.get('numLastLogs')),
            showLastLog: this.get('testLol'),
            numLastLogs: this.get('numLastLogs')
        });
    }
});
