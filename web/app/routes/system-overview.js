import Ember from 'ember';
import LeosacRoute from '../leosac-route';

export default LeosacRoute.extend({
    authSrv: Ember.inject.service('authentication'),
    systemOverview: Ember.inject.service('system-overview'),
    logManager: Ember.inject.service('log-manager'),
    store: Ember.inject.service(),
    _title: 'System Overview',
    _requireAuth: true,

    currentLogPage: 0,
    numLastLogs: 10,
    showLastLog: false,
    testLol: Ember.computed('showLastLog', function ()
    {
        "use strict";
        return true;
    }),
    actions: {
        refresh()
        {
            "use strict";
            this.get('systemOverview').update();
        },
        updateLogPerPage(n)
        {
            "use strict";
            this.set('numLastLogs', Number(n));
            this.refresh();
        },
        updateLogPageNumber(n)
        {
            "use strict";
            this.set('currentLogPage', Number(n));
            this.refresh();
        },
    },
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
        const logs = this.get('store').query('log-message',
            {p: this.get('currentLogPage'),
                ps: this.get('numLastLogs')});
        const total = logs.then(msgs => msgs.get('meta').total);

        return Ember.RSVP.hash({
            lastLogs: logs.then((msgs) =>
            {
                return msgs.sortBy('numericId').reverse().slice(0, this.get('numLastLogs'));
            }),
            showLastLog: this.get('testLol'),
            numLastLogs: this.get('numLastLogs'),
            currentLogPage: this.get('currentLogPage'),
            lastLogPage: logs.then(msgs => msgs.get('meta').last),
            totalLogs: total
        });
    }
});
