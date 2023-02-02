'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      Movie.hasMany(models.Author, {
        foreignKey: 'movieId',
      });
      Movie.hasMany(models.Actor, {
        foreignKey: 'movieId',
      });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      year: DataTypes.NUMBER,
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
