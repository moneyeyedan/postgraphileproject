const express = require('express');
const { postgraphile }  = require('postgraphile');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(postgraphile( 
    "postgres://postgres:kamesh333@localhost:5432/postgraphile_sample",
{
//   watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
}));
app.listen(4000,()=>{
    console.log('localhost:4000')
})