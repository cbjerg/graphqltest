import express from 'express';
import bodyParser from 'body-parser';
import schema from './schema';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', bodyParser.json(), graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(4000, () => console.log('Express Server running on port 4000'));