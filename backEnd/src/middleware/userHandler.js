const path = require("path")
const fs = require("fs");

function IdHandler (req, res, next) {
    const playerid = req.headers.id;
    if(!playerid) {
        throw {"status": 401, "messege": "you should put id"};
    }
    const playerFolderPath = path.resolve(`.\\players`, playerid);
    next(); 
}
module.exports = {IdHandler}