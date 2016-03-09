import Ember from 'ember';

/**
 * This service store global information about the
 * Leosac we are connecting too.
 */
export default Ember.Service.extend({
  websocket: Ember.inject.service(),
  version: undefined,

  /**
   * The version number of the Leosac server.
   */
  version: "0.0.0",

  /**
   * This title of the current view.
   * Not sure this is the best way to manage this...
   */
  current_view_title: "Default",

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
