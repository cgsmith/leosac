import Ember from 'ember';

export default Ember.Component.extend({
    /**
     * What action to execute on confirmation
     */
    onSelect: () => {},
    userNumber: 10,
    actions:
    {
        numberSelected()
        {
            "use strict";
            this.get('onSelect')(this.get('userNumber'));
        }
    }
});
