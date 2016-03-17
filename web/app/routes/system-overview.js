import Ember from 'ember';
import LeosacRoute from '../leosac-route';

export default LeosacRoute.extend({
    authSrv: Ember.inject.service('authentication'),
    _title: 'System Overview',
    _requireAuth: true,
    beforeModel()
    {
        "use strict";
        return this._super();
    }
});
