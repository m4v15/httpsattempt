const routes = [];

routes.push({
  path:'/',
  method: 'GET',
  handler: (request,reply)=>{
    const data = {title:'Build from Scratch'};
    reply.view('index',data)
  }
})

module.exports = routes
