const axios = require('axios');
const { gql } = require('apollo-server');
const typeDefs = gql`
  type Message {
    message: String
  }
  type Actor {
    name: String
    movieId: Int
  }

  type Query {
    findActor: [Actor]
  }
  type Mutation {
    addActor(name: String, movieId: Int): Message
    deleteActor(_id: ID): Message
  }
`;

const resolvers = {
  // query buat get data
  Query: {
    findActor: async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/actor`);
        return data.data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addActor: async (_, args) => {
      try {
        console.log(args);
        let { data } = await axios.post(`http://localhost:3000/actor`, args);
        return { message: `Actor ${args.name} successfully added` };
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    deleteActor: async (_, args) => {
      try {
        console.log(args, '<<<args');
        await axios.delete(`http://localhost:3000/actor/${args._id}`);
        return { message: `item ${args._id} successfully deleted` };
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { actorTypeDefs: typeDefs, actorResolvers: resolvers };
