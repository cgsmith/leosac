import Ember from 'ember';

/**
 * This service store global information about the
 * Leosac we are connecting too.
 */
export default Ember.Service.extend({
  websocket: Ember.inject.service(),
  version: undefined,

  init()
  {
    "use strict";

    console.log("LEOSAC INFO");

    var self = this;
    websocket.sendJson('get_leosac_version', {}).then(
      function (response)
      {
        self.version = response.version;
      }
    );
  }
});
