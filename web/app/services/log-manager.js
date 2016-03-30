import Ember from 'ember';

/**
 * The LogManager Service retrieves logs
 * from the Leosac service.
 *
 * The goal is to a have an API that supports:
 *      + Pagination
 *      + Custom querying (log-level)
 * all while not having to much data in the user's browser.
 */
export default Ember.Service.extend({
    websocket: Ember.inject.service('websocket'),

    /**
     * Returns the `n` last logs
     * @param n
     */
    lastLogs(n)
    {
        "use strict";
        var self = this;
        var ws = self.get('websocket');
        var def = Ember.RSVP.defer();

        let lastLogs = [];

        ws.sendJson('get_logs', {n: n}).then(
            function (response)
            {
                response['data'].forEach((elem) =>
                {
                    var attr = elem['attributes'];
                    lastLogs.push({
                        message: attr.message,
                        timestamp: new Date(attr.timestamp * 1000)
                    });
                });
                def.resolve(lastLogs);
            },
            function (failure)
            {
                def.reject(failure);
            }
        );
        return def.promise;
    }

});
