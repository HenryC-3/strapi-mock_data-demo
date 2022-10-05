'use strict';

/**
 * mock-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mock-article.mock-article');
