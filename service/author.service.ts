const { Author, Movie } = require('../models');

interface Author {
  name: string;
  movieId: number;
}
interface UpdateAuthor extends Author {
  id: string;
}

interface AuthorId {
  id: string;
}

export default class AuthorService {
  static getAuthor = async () => {
    try {
      const author = await Author.findAll({ include: Movie });
      return {
        success: true,
        data: author,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
  static createAuthor = async ({ name, movieId }: Author) => {
    try {
      const author = await Author.create({
        name,
        movieId,
      });
      return {
        success: true,
        message: 'Successfully Created',
        data: author,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  static updateAuthor = async ({ id, name, movieId }: UpdateAuthor) => {
    try {
      const findAuthor = await Author.findByPk(id);
      if (!findAuthor) {
        return {
          success: false,
          error: 'Author Not Found',
        };
      }
      const updateAuthor = await Author.update(
        { name, movieId },
        { where: { id } }
      );
      return {
        success: true,
        message: 'Successfully Updated',
        data: updateAuthor,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  static deleteAuthor = async ({ id }: AuthorId) => {
    try {
      const findAuthor = await Author.findByPk(id);
      if (!findAuthor) {
        return {
          success: false,
          error: 'Author Not Found',
        };
      }
      const deleteAuthor = await Author.destroy({
        where: { id },
      });
      return {
        success: true,
        message: 'Successfully Deleted',
        data: deleteAuthor,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
}
