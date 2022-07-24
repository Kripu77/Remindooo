const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const { homeRouter } = require("../router/home");
const { reminder } = require("../router/reminder");
const { catchAll } = require("../controllers/error");
const {connectDB} = require("../db/connect")
const port = process.env.PORT_NUM;
const connectionURI = process.env.MONGO_URI;



//morgan middleware
app.use(morgan("tiny"));

//body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//home router middleware
app.use("/", homeRouter);

//reminder router middleware
app.use("/api/reminder", reminder);

//catch all routes middleware
app.use("*", catchAll);

//start server only if connnection to db is successful
const startServer = async(connectionURI)=>{
    try{

        await connectDB(connectionURI);
        app.listen(port, (err, res) => {
          if (err) throw err;
          else console.log(`Server running on ${port}`);
        });

    }
    catch(err){
        console.log(err)
    }
}

startServer(connectionURI)

