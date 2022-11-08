const express = require("express"),
    bodyParser = require("body-parser");
    routes = require("./api/routes"),
    sequelize = require("./api/models")

const app = express();

app.use(bodyParser.json());
app.use(routes);

(async () => {
    try {
        await sequelize.sync({force: false});
    } catch (err) {
        console.log(err);
    }
})();

module.exports = app;
