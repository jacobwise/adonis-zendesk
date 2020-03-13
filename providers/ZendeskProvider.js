const { ServiceProvider } = require("@adonisjs/fold");

class ZendeskProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/Zendesk", () => {
      const Config = this.app.use("Adonis/Src/Config");
      return new (require("../src/Zendesk"))(Config);
    });
  }
}

module.exports = ZendeskProvider;
