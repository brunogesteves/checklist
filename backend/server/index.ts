import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { GuestListResolver } from './Resolvers/GuestList-Resolver';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [GuestListResolver],
  });

  const apolloServer = new ApolloServer({ schema, cache: 'bounded' });
  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  });
};
main();
