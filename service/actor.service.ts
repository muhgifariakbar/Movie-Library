const { Actor, Movie } = require('../models');

interface Actor {
  name: string;
  movieId: number;
}
interface UpdateActor extends Actor {
  id: string;
}

interface ActorId {
  id: string;
}

export default class ActorService {
  static getActor = async () => {
    try {
      const actor = await Actor.findAll();
      return {
        success: true,
        data: actor,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
  static createActor = async ({ name, movieId }: Actor) => {
    try {
      const actor = await Actor.create({
        name,
        movieId,
      });
      return {
        success: true,
        message: 'Successfully Created',
        data: Actor,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  static updateActor = async ({ id, name, movieId }: UpdateActor) => {
    try {
      const findActor = await Actor.findByPk(id);
      if (!findActor) {
        return {
          success: false,
          error: 'Actor Not Found',
        };
      }
      const updateActor = await Actor.update(
        { name, movieId },
        { where: { id } }
      );
      return {
        success: true,
        message: 'Successfully Updated',
        data: updateActor,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  static deleteActor = async ({ id }: ActorId) => {
    try {
      const findActor = await Actor.findByPk(id);
      if (!findActor) {
        return {
          success: false,
          error: 'Actor Not Found',
        };
      }
      const deleteActor = await Actor.destroy({
        where: { id },
      });
      return {
        success: true,
        message: 'Successfully Deleted',
        data: deleteActor,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
}
