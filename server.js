const express = require("express");
const app = express();
const port = 4110;
const cors = require("cors");
const bodyparcer = require("body-parser");
require("./utils/db");
const productRouter = require("./routes/productRoutes");
const studentRouter = require("./routes/studentRoutes");
const invoiceRouter = require("./routes/invoiceRoutes");
const purchaseHistoryRouter = require("./routes/purchaseHistoryRoutes");

// get fun has two arguments first is end point then call back (no need to call. Called automatically)function
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Middlewares
app.use(bodyparcer.json());
app.use(cors());
// Product API
app.use("/api", productRouter);

// Student API
app.use("/api", studentRouter);

// Invoice API
app.use("/api", invoiceRouter);

// Purchase History API
app.use("/api", purchaseHistoryRouter);

app.get("/welcome", (req, res) => {
  res.send("<h1>Welcome Ali Ahmed</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// node behavious = asyncrouns
