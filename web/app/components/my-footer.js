import Ember from 'ember';

export default Ember.Component.extend({
  globalInfo: Ember.inject.service('leosac-info'),
  toto: "LOL",
  lama()
  {
    "use strict";
    return {"rwrw": "lol"};
  }

});
