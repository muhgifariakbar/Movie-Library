const { Movie, Author, Actor } = require('../models');

interface Movie {
  name: string;
  year: number;
  genre: string;
}
interface UpdateMovie extends Movie {
  id: string;
}

interface MovieId {
  id: string;
}

export default class MovieService {
  static getMovie = async () => {
    try {
      const movie = await Movie.findAll({ include: [Actor, Author] });
      return {
        success: true,
        data: movie,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
  static createMovie = async ({ name, year, genre }: Movie) => {
    try {
      const movie = await Movie.create({
        name,
        year,
        genre,
      });
      return {
        success: true,
        message: 'Successfully Created',
        data: movie,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  static updateMovie = async ({ id, name, year, genre }: UpdateMovie) => {
    try {
      const findMovie = await Movie.findByPk(id);
      if (!findMovie) {
        return {
          success: false,
          error: 'Movie Not Found',
        };
      }
      const updateMovie = await Movie.update(
        { name, year, genre },
        { where: { id } }
      );
      return {
        success: true,
        message: 'Successfully Updated',
        data: updateMovie,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  static deleteMovie = async ({ id }: MovieId) => {
    try {
      const deleteMovie = await Movie.destroy({
        where: { id },
      });
      return {
        success: true,
        message: 'Successfully Deleted',
        data: deleteMovie,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
}
