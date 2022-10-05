const { mockArticleProvider } = require("./mock/provider");

module.exports = {
  register(/*{ strapi }*/) {},
  async bootstrap({ strapi }) {
    mockArticleProvider(strapi);
  },
};
