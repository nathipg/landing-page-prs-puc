const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    picture: {
      type: GraphQLString,
    },
  }),
});

module.exports = UserType;
