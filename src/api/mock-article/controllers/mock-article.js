'use strict';

/**
 * mock-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mock-article.mock-article');
