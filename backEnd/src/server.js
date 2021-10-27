const express = require('express');
const app = express();
const port = 3500;
const cors= require('cors');

app.use(cors({
    origin:'*'
  }))
  app.use(express.static('public'));
  app.use(express.json()) // parses requests as json
  
const {errorHandlerMiddleware} = require("./middleware/errorHandler")
const {IdHandler} = require("./middleware/userHandler");
const playerRouter = require("./routers/playerRouter");
const goalKeeperRouter=require("./routers/goalKeeperRouter")
app.use(IdHandler);
app.use('/', playerRouter);
app.use('/',goalKeeperRouter);


app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
