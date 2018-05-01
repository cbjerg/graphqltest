import express from 'express';
import bodyParser from 'body-parser';
import schema from './schema';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', bodyParser.json(), graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(4000, () => console.log('Express Server running on port 4000'));