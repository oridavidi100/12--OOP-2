const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");
const {Player} = require('../../soccer/soccer');


router.post("/createP/", (req, res)=> {
    let player=req.body
    const playerId=req.headers.id
    const newPlayer= new Player(player.Fname,player.Lname,player.salary,player.age,playerId,player.strong_leg,player.position,player.celebrationSentence)
    const IdFolderPath = path.resolve(`.\\players`,  playerId +".json");
    if(fs.existsSync(IdFolderPath)) {
        const collection = fs.readdirSync(IdFolderPath); //all pokemon collection files
        if (collection.includes(`${playerId}.json`)){ //Pokemon already caught
            throw {"status": 403, "messege": "Id already used"};
        }
    } 
    fs.writeFileSync(IdFolderPath, `${JSON.stringify(newPlayer)}`); //Add pokemon file with pokemon obj
    return res.send(true);
})
module.exports = router;