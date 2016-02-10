import Ember from 'ember';

/**
 * This service provide support for authentication.
 *
 * It is used to maintain basic information about who
 * is currently logged in. It provides API to perform
 * authentication as well as manages authentication token
 * stored in the local storage.
 */
export default Ember.Service.extend({
  websocket: Ember.inject.service('websocket'),
  /**
   * Username of the currently logged in user.
   */
  user_id: false,

  init()
  {
    "use strict";
    // Attempt to automatically authenticate if we can find an auth
    // token
    if (this.fetchLocalAuthToken())
    {
      this.authenticateWithToken(this.fetchLocalAuthToken());
    }
  },
  /**
   * Authenticate with username/password credential
   * @param username
   * @param password
   */
  authenticate(username, password, onSuccess, onFailure)
  {
    "use strict";
    var self = this;
    var ws = this.get('websocket');
    return ws.sendJson('create_auth_token',
      {
        username: username,
        password: password
      }).then(function (data)
    {
      if (data.status === 0) // success
      {
        // Store auth token in local storage
        self.setLocalAuthToken(data.token);
        self.set('user_id', username);
        if (onSuccess)
          onSuccess();
      }
      else
      {
        self.set('user_id', false);
        self.setLocalAuthToken(false);
        if (onFailure)
          onFailure();
      }
    });
  },
  authenticateWithToken(token)
  {
    "use strict";
    var self = this;
    var ws = this.get('websocket');
    return ws.sendJson('authenticate_with_token',
      {
        token: token
      }).then(function (data)
    {
      if (data.status === 0)
      {
        self.set('user_id', data.user_id);
      }
      else
      {
        console.log('Authentication token invalid');
      }
    });
  },
  /**
   * Retrieve the authentication token stored in the local storage.
   */
  fetchLocalAuthToken()
  {
    "use strict";
    if (!!localStorage.auth_token)
    {
      return localStorage.auth_token;
    }
    return false;
  },
  setLocalAuthToken(token)
  {
    "use strict";
    localStorage.auth_token = token;
  }
});
