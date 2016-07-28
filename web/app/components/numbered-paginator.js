import Ember from 'ember';

export default Ember.Component.extend({
    first: 0,
    last: 0,
    current: 0,
    pages: [],
    // The action that is triggered when a user change page by clicking.
    onPageChange: (n) => {n = n;},
    init()
    {
        "use strict";
        this._super();
        const first = this.get('first');
        const last = this.get('last');
        this.set('pages', []);

        let i = first;
        for (i = first; i !== last; i++)
        {
            this.get('pages').push(i);
        }
        this.get('pages').push(last);
    },
    actions:
    {
        changePage(n)
        {
            "use strict";
            this.get('onPageChange')(Number(n));
        }
    }
});
