const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = graphql;

const ReviewType = require('./TypeDefs/ReviewType');

const reviewData = require('../data.json').reviews;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllReviews: {
      type: new GraphQLList(ReviewType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return reviewData;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
