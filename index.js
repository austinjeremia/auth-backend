var express=require("express");
const connectDb=require("./db");
var signinRouter=require("./routes/signin.js");
var loginRouter=require("./routes/login.js");
var homeRouter=require("./routes/home.js");
const cors=require("cors");
var app=express();

const port=4000;
app.use(express.json());
app.use(cors({ origin:"*"}));
connectDb();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use("/signin",signinRouter);  
app.use("/login",loginRouter);  
app.use("/home",homeRouter);
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })