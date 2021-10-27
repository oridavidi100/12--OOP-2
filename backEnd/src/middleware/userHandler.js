const path = require("path")
const fs = require("fs");

function IdHandler (req, res, next) {
    if (!req.headers.id){
        return next()
    }
    const playerid = req.headers.id;
    const playerFolderPath = path.resolve(`.\\players`, playerid);
    next(); 
}
module.exports = {IdHandler}