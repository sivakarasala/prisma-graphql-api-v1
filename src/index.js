import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
  type Query {
    me:User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "123",
        name: "shiva",
        email: "shiva@shiva.com",
        age: 29
      };
    },
    post() {
      return {
        id: "098",
        title: "Adi yogi",
        body: "",
        published: false
      };
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("Aum Namah Shivaya");
});
