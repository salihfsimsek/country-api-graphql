import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'

import resolvers from '@resolvers'
import typeDefs from '@typeDefs'

//Datas
import db from './datas'

const yoga = createYoga({
    landingPage: false,
    graphqlEndpoint: '/console',
    schema: createSchema({
        typeDefs,
        resolvers
    }),
    context: {
        db
    }
})

const server = createServer(yoga)

server.listen(4000, () => console.log('Server is running on localhost:4000'))