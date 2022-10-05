const { faker } = require("@faker-js/faker");

module.exports = {
  async mockArticleProvider(strapi) {
    for (let index = 0; index < 100; index++) {
      await strapi.entityService.create("api::mock-article.mock-article", {
        data: {
          title: faker.word.adjective() + " " + faker.word.noun(),
          content: faker.lorem.paragraph(),
        },
      });
    }
  },
};
