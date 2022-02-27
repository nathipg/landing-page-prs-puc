const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
});

module.exports = ClientType;
