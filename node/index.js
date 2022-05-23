const cors = require("cors");
const passport = require("passport");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/dbConfig");
const express = require("express");
/* express intialization */
const app = express();
require("./auth/passport")(passport);
require("dotenv").config();

/* connecting to database */
connectDb();

// adding middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

/* Router */
app.use(
  "/ncc",
  require("./routes/userRoute"),

);
app.use(
  "/ncc",
  require("./routes/admin"),

);

app.get("/", (req, res) => {
  res.json({ redirect: "/login" });
});

// listen for requests
app.listen(5000, () => {
  console.log(`server is running at port : http://localhost:5000  `);
});

// const sessionChecker = require('./middleware/session')
/* middlewares and configure */
// app.use(session({
//     key: "user_id",
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 600000,
//     }
// }))
// app.use((req, res, next) => {
//     if (req.cookies.user_id && !req.session.user) {
//         res.clearCookie("user_id")
//     } else {
//         next()
//     }
// })
