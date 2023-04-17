//server.js
const cli = require("next/dist/cli/next-dev");
cli.nextStart(["-- -p", process.env.APP_PORT || 3000]);
console.log("Server running on port " + (process.env.APP_PORT || 3000));
