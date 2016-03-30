import DS from 'ember-data';

export default DS.Adapter.extend({
  ws: Ember.inject.service('websocket'),

  findAll: function (store, type, sinceToken)
  {
    var def = Ember.RSVP.defer();

    var ws = this.get('ws');
    console.log("Try to find all: " + type);
    var p = ws.sendJson('get_logs', {});

    p.then(function (data)
    {
      "use strict";
      console.log(data);
      store.push(data);
      def.resolve([]);
    },
    function (failure)
    {
      "use strict";
      def.reject();
    });

    return def.promise;
  }
});
