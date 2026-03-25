import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";


const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => "I am Utkarsh"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

export const GET = startServerAndCreateNextHandler(server);
export const POST = startServerAndCreateNextHandler(server);