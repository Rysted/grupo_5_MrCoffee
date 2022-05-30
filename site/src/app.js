//' Express | Path | Puerto
const express = require("express");
const path = require("path");
const app = express();

//' Ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//' Static
app.use(express.static("public"));

//' localhost
app.listen(3000, () => {
  console.log(`MrCoffee listening at http://localhost:3000`);
});

//' Router
const mainRouter = require("./routes/statics/main.js");
const usersRouter = require("./routes/users/users.js");
const adminRouter = require("./routes/admin/admin.js");
const productsRouter = require("./routes/products/products.js");

//' Puertos
//! home
app.use("/", mainRouter);
//! users.js
app.use("/user", usersRouter);
//! admin.js
app.use("/admin", adminRouter);
//! productos
app.use("/product", productsRouter);