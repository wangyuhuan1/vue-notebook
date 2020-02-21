const mockIndexData = require("./mock/cart.json");
module.exports = {
    devServer: {
      port: 8080,
      before(app) {
        app.get("/cart", (req, res) => {
          res.json(mockIndexData);
        });
      }
    }
  };