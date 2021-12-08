const { setupInput } = require("./input");
const {connect} = require("./client");
console.log("Connecting ...");

let conn = connect();
setupInput(conn);