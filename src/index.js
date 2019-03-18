import { GraphQLServer } from "graphql-yoga";

// Demo user data
const users = [
  {
    id: "1",
    name: "shiva",
    email: "shiva@shiva.com",
    age: 29
  },
  {
    id: "2",
    name: "shambho",
    email: "shambho@shiva.com",
    age: 29
  },
  {
    id: "3",
    name: "shankara",
    email: "shankara@shiva.com",
    age: 29
  }
];

// Type definitions (schema)
const typeDefs = `
  type Query {
    users(query: String): [User!]!
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
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter(user => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
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
