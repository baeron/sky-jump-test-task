module.exports = function(app) {
  var report = require("../controllers/report.controller");
  app.get("/api/reports", report.getAll);
};
