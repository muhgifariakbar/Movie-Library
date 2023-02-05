if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const { ApolloServer } = require('apollo-server');
const { actorTypeDefs, actorResolvers } = require('./schema/actor');

const PORT = process.env.PORT || 4001;

const server = new ApolloServer({
  typeDefs: [actorTypeDefs],
  resolvers: [actorResolvers],
});

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
