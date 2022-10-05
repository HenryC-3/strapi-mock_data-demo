'use strict';

/**
 * mock-article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mock-article.mock-article');
