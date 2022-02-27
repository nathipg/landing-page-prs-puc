const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = graphql;

const ReviewType = require('./TypeDefs/ReviewType');
const ClientType = require('./TypeDefs/ClientType');

const reviewData = require('../data.json').reviews;
const clientData = require('../data.json').clients;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllReviews: {
      type: new GraphQLList(ReviewType),
      args: {},
      resolve(parent, args) {
        return reviewData;
      },
    },
    getAllClients: {
      type: new GraphQLList(ClientType),
      args: {},
      resolve(parent, args) {
        return clientData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newId = clientData.length + 1;

        clientData.push({
          id: newId,
          nsme: args.name,
          email: args.email,
          password: args.password,
        });

        return {
          id: newId,
          ...args,
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
