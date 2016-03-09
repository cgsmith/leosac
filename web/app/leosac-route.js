import Ember from 'ember';

/**
 * This is a base route for the application.
 *
 * To extend this base route, do the following:
 * ```
 *   import LeosacRoute from '../leosac-route';
 *   export default LeosacRoute.extend({...});
 * ```
 *
 * It provides various utilities that are shared
 * between route.
 *
 * The following property should be overridden:
 *     _title: The title of the route. It will be
 *             displayed as the HTML document title,
 *             as well as in the HTML template.
 *
 * @note In case the subclass implements the beforeModel()
 *       method, it MUST call `this._super()` otherwise this
 *       base route will be useless.
 */
export default Ember.Route.extend({
    globalInfo: Ember.inject.service('leosac-info'),
    _title: 'default',
    beforeModel()
    {
        "use strict";
        this.get('globalInfo').set('current_view_title', this._title);
        document.title = 'Leosac - ' + this._title;
    }
});
