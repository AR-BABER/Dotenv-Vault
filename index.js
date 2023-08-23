// change this vault key, i.e using qa vault key, it will decript all the data in vault relating to qa keys.
const key =
  "dotenv://:key_4c6da3a660ce2772a40b76ed475219108a224d6649a4335034a1f679c0fbe782@dotenv.local/vault/.env.vault?environment=uat";

require("dotenv").config({ DOTENV_KEY: key });

//THIS CODE IS JUST TO SHOW RESPONCE ON HTML
const PORT = process.env.PORT || 3000;
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  //THIS CONSOLE IS DISPLAYING API KEY, NOW DEPENDING UPON THE vault KEY PROVIDED, THIS WILL CHANGE
  res.end(`Hello ${process.env.API_KEY}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
});
