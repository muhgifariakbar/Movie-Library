'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movie = [
      { name: 'movie 1', year: 2021, genre: 'comedy' },
      { name: 'movie 4', year: 2002, genre: 'comedy romance' },
      { name: 'movie 3', year: 2011, genre: 'comedy horror' },
      { name: 'movie 2', year: 1985, genre: 'comedy not funny' },
    ];
    const actor = [
      { name: 'sebastian steel', movieId: 1 },
      { name: 'johndoe', movieId: 2 },
      { name: 'johnceno', movieId: 3 },
      { name: 'agus barbar', movieId: 1 },
    ];
    const author = [
      { name: 'luffy monkey', movieId: 1 },
      { name: 'zori', movieId: 2 },
      { name: 'perona', movieId: 1 },
      { name: 'nami burglar', movieId: 1 },
    ];
    await queryInterface.bulkInsert('Movies', movie, {});
    await queryInterface.bulkInsert('Actors', actor, {});
    await queryInterface.bulkInsert('Authors', author, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Actors', null, {});
    await queryInterface.bulkDelete('Authors', null, {});
  },
};
