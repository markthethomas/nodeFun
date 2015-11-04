const http = require('https');

http.get('https://api.charityware.co/health', (res) => {
  console.log(res.headers);
});
//
//
// function* router(token) {
//   for (route of routes) {
//
//   }
// }
