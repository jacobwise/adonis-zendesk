# Adonis Zendesk

Adonis Zendesk adds an adonis service provider wrapper for [Zendesk NodeJS SDK](https://github.com/hostmakerco/zendesk-node-sdk).

[![NPM Version](https://img.shields.io/npm/v/adonis-zendesk.svg?style=flat-square)](https://www.npmjs.com/package/adonis-zendesk)

## Installation

1. Add package:

```bash
$ npm i adonis-zendesk --save
```

or

```bash
$ yarn add adonis-zendesk
```

2. Register provider inside the your `start/app.js` file.

```javascript
const providers = [
...
'adonis-zendesk/providers/ZendeskProvider',
...
]
```

3. Create config file `config/zendesk.js`

```javascript
"use strict";

const Env = use("Env");

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Auth Type
  |--------------------------------------------------------------------------
  |
  | Auth Type for interacting with Zendesk
  |
  |
  */
  authType: Env.get("ZEN_DESK_AUTH_TYPE", "API_TOKEN"),
  /*
  |--------------------------------------------------------------------------
  | Admin Token
  |--------------------------------------------------------------------------
  |
  | Admin Token From Zendesk
  |
  |
  */
  zendeskAdminToken: Env.get("ZEN_DESK_TOKEN"),

  /*
  |--------------------------------------------------------------------------
  | Subdomain
  |--------------------------------------------------------------------------
  |
  | Subdomain for Zendesk
  |
  |
  */
  zendeskSubdomain: Env.get("ZEN_DESK_SUBDOMAIN"),

  /*
  |--------------------------------------------------------------------------
  | Email
  |--------------------------------------------------------------------------
  |
  | Email to associate all requests with
  |
  |
  */
  email: Env.get("ZEN_DESK_EMAIL")
};
```
