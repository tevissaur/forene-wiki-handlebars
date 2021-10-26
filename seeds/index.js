const seedPages = require('./page-seeds');
const seedArticles = require('./article-seeds');
const seedTags = require('./tag-seeds');
// const seedArticleTags = require('./article-tag-seeds');
const seedImages = require('./image-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPages();
  console.log('\n----- PAGES SEEDED -----\n');

  await seedArticles();
  console.log('\n----- ARTICLES SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

//   await seedArticleTags();
//   console.log('\n----- ARTICLE TAGS SEEDED -----\n');

  await seedImages()
  console.log('\n----- IMAGES SEEDED -----\n')

  process.exit(0);
};

seedAll();
