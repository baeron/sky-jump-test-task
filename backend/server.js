const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

require("./routes/report.routes")(app);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
