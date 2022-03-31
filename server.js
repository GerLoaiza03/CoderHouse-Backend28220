const express = require("express");
const session = require("express-session");
const expbs = require("express-handlebars");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const path = require("path");
const routes = require("./routers/index");
var cookieParser = require('cookie-parser')

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

/*      PERSISTENCIA POR MONGO ATLAS     */
const connectMongo = require("connect-mongo");
const MongoStore = connectMongo.create({
  mongoUrl: 'mongodb+srv://german:german123@cluster0.bl5oh.mongodb.net/sesiones?retryWrites=true&w=majority',
  ttl: 60
})
/* ------------------------------------- */

//Session config
app.use(cookieParser());
app.use(session({
  store: MongoStore,
  secret: '123456789!@#$%^&*()',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: 'auto',
    maxAge: 100000//
  }
})
);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));
app.use("/", routes);

//Motor de plantillas
app.engine(
  "hbs",
  expbs.engine({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views/partials"),
    extname: ".hbs",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

/* CHAT */
const ApiChat = require("./api/apiChat");
const apiChat = new ApiChat();
let messages = [];

io.on("connection", async (socket) => {
  let messagesToEmit = await apiChat.readChatFromFile();

  messages.splice(0, messages.length);
  for (const m of messagesToEmit) {
    messages.push(m);
  }

  socket.emit("messages", messagesToEmit);

  socket.on("new-message", (data) => {
    data.id = messages.length+1
    messages.push(data);

    io.sockets.emit("messages", [data]);

    apiChat.writeChatToFile(messages);
  });
});

//Manejador de errores
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Ocurrio un error: " + err);
});

//Server
httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});