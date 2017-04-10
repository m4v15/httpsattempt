const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const path = require('path');
const routes = require('./routes');

const server = new hapi.Server();

server.connection( {
  uri: process.env.BASE_URL,
});
server.register([inert, vision], (err) =>{
  if (err) return err;

  server.views({
    engines: {
      'hbs': require('handlebars'),
    },
    relativeTo: path.join(__dirname, 'handlebars'),
    path: 'views',
    layoutPath: 'layout',
    layout: 'index',
    partialsPath: 'partials',
  });
  server.route(routes);
});

server.start((err)=>{
  if (err) throw err;
  console.log('Server serving at:', server.info);
});
