import Ember from 'ember';

export default Ember.Route.extend({
    globalInfo: Ember.inject.service('leosac-info'),
    beforeModel(){
        "use strict";
        this.get('globalInfo').set('current_view_title', 'About');
    }
});
