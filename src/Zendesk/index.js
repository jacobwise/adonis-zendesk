"use strict";

const ZendeskSDK = require("zendesk-node");

class Zendesk {
  constructor(Config) {
    this.Config = Config;
    this._zendesksPool = null;
  }

  get(name) {
    /**
     * If there is an instance of zendesk already, then return it
     */
    if (this._zendesksPool) {
      return this._zendesksPool;
    }

    /**
     * Read configuration using Config
     * provider
     */
    const config = this.Config.get(`zendesk`);
    config.authType = ZendeskSDK.AUTH_TYPES[config.authType];

    /**
     * Create a new queue instance and save it's
     * reference
     */
    this._zendesksPool = ZendeskSDK(config);

    /**
     * Return the instance back
     */
    return this._zendesksPool;
  }
}

module.exports = Zendesk;
