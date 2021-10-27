const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");
const {GoalKeeper}=require("../../soccer/soccer");


router.post("/createK/", (req, res)=> {
    const playerId=req.headers.id
    const goalKeeper=req.body
    const newGoalKeeper= new GoalKeeper(goalKeeper.Fname,goalKeeper.Lname,goalKeeper.salary,goalKeeper.age,playerId,goalKeeper.isLeftHanded,goalKeeper.lastGoalConceded)
    const IdFolderPath = path.resolve(`.\\players`,  playerId +".json");
    if(fs.existsSync(IdFolderPath)) {
        throw {"status": 403, "messege": "Id already used"};
    } 
    fs.writeFileSync( IdFolderPath,`${JSON.stringify(newGoalKeeper)}`); //Add pokemon file with pokemon obj
    return res.send(true);
})
module.exports = router;