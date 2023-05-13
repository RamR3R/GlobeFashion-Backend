const express = require('express');
const app = express();
const connection = require("./db");
const userRouter = require('./Routes/user.routes');
const productRouter = require('./Routes/product.routes');
const orderRouter = require('./Routes/order.routes');
const cors = require("cors");

app.use(express.json());

app.get('/', (req, res) => res.send('Globe Fashion API'));

app.use(cors());

app.use("/users",userRouter);

app.use("/products",productRouter);

app.use("/orders",orderRouter);

app.listen(8080, async() =>{
    try{
        await connection;
        console.log("Conected to DB");
        console.log(`Server Running in PORT 8080`);
    }
    catch(err)
    {
        console.log(err);
        console.log("Connection to DB Failed");
    }
})
