const { gql } = require('apollo-server-express');

module.exports = gql `
    extend type Query{
        users: [User]
    }
    extend type Mutation {
        signup(input: signup): User
    }
    input signup {
        name: String!
        email: String!
        password: String!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        recipes: [Recipe!]
    }
`;