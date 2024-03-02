require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// rest of packages
const cookieParser = require("cookie-parser"); // access to cookies

// dev
const morgan = require("morgan");

// Security
const fileUpload = require("express-fileupload");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const rateLimiter = require("express-rate-limit")
const helmet = require("helmet")
const xss = require("xss-clean")
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize")

// DB
const connectDB = require("./db/connect");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// routers
const authRouter =  require("./routes/authRoutes") 
const userRouter = require("./routes/userRoutes")
const alertRouter = require("./routes/alertRoutes")
// dev
app.use(morgan("tiny"));
app.use(express.json()); // have acces to json data in req.body
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(fileUpload({useTempFiles: true}));
app.use(express.static("./public"));
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());



// app.use /api routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/alert", alertRouter);

// middleware errors and not-found
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
