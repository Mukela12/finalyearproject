const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//DOTENV
dotenv.config();

// MONGODB CONNECTION
connectDB();

//REST OBJECT
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
app.use("/auth", require("./routes/userRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.use("/biz", require("./routes/BizDataRoutes"));
app.use("/business-auth", require("./routes/businessAccountRoute"));
app.use("/prod", require("./routes/ProductRoute"));

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning ${PORT}`.bgGreen.white);
});
