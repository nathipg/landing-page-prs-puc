const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = require('./UserType');

const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    user: {
      type: UserType,
    },
    text: {
      type: GraphQLString,
    },
  }),
});

module.exports = ReviewType;
