const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const{homeRouter} = require("../router/home");
const {reminder} = require("../router/reminder")
const {catchAll} = require("../controllers/error");
const port = process.env.PORT_NUM;




//morgan middleware
app.use(morgan("tiny"));

//body parser middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//home router middleware
app.use("/", homeRouter)


//reminder router middleware
app.use("/api/reminder", reminder)





//catch all routes middleware
app.use('*', catchAll)

//server instance
app.listen(port, (err, res)=>{
if(err) throw err;
else console.log(`Server running on ${port}`)
})