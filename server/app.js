const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
    // pass in a schema property
}));

app.listen(3000, () => {
    console.log('now listening for requests on port 3000');
});