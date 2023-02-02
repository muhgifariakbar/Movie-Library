'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Actor.belongsTo(models.Movie, { foreignKey: 'movieId' });
    }
  }
  Actor.init(
    {
      name: DataTypes.STRING,
      movieId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Actor',
    }
  );
  return Actor;
};
