const express = require('express');
const app = express();
const port = 3500;
const cors= require('cors');
const path = require("path");
const fs = require("fs");

app.use(cors({
    origin:'*'
  }))
  app.use(express.static('public'));
  app.use(express.json()) // parses requests as json
  
const {errorHandlerMiddleware} = require("./middleware/errorHandler")
const {IdHandler} = require("./middleware/userHandler");
const playerRouter = require("./routers/playerRouter");
const goalKeeperRouter=require("./routers/goalKeeperRouter");
const { json } = require('express');
const { Player } = require('../soccer/soccer');
app.use(IdHandler);
app.use('/P', playerRouter);
app.use('/K',goalKeeperRouter);


app.use(errorHandlerMiddleware);

app.get("/", (req, res)=>{
    const FolderPath = path.resolve(`.\\players`); //path to th user file
    const team = [];
    const collection = fs.readdirSync(FolderPath); //collection files from user folder
    for (const jso of collection) {
          const currentFilePath = path.resolve(FolderPath, jso); 
          const fileContent = fs.readFileSync(currentFilePath).toString();
          team.push(fileContent);
        }
        res.send(team)
})

app.get("/:string", (req, res)=>{
 let str=req.params.string
  const FolderPath = path.resolve(`.\\players`); //path to th user file
  const team = [];
  const collection = fs.readdirSync(FolderPath); //collection files from user folder
  for (const jso of collection) {
        const currentFilePath = path.resolve(FolderPath, jso); 
        const fileContent = fs.readFileSync(currentFilePath).toString();
        team.push(fileContent);
      }
  let searchArr=[] 
  for (let players of team){
    players=JSON.parse(players)
    for (let key in players) {
      if (players[key] ===str) {
        searchArr.push(players)
      }
  }
}
  res.send(searchArr)
  })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
