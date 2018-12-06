const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');
const port = 8002;

const schema = buildSchema(`
    inputType
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
    message: () => 'Hello World!'
};

const graphqlServer = app => {

    app.use('/graphql', expressGraphql({
        schema: schema,
        rootValue: root,
        graphiql: true
    }));

    app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`));
}

module.exports = graphqlServer;
