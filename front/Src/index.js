
document.getElementById("player").addEventListener("click",player)
document.getElementById("goolkeeper").addEventListener("click",goolkeepr)
document.getElementById("createGoalKeeper").style.display ="none";
document.getElementById("createPlayer").style.display = "none";
document.getElementById("submitPlayer").addEventListener("click",submitplayer)
document.getElementById("submitKeeper").addEventListener("click",submitKeeper)
document.getElementById("createPerson").style.display = "none";
document.getElementById("Fbutton").addEventListener("click",startCreate)


function startCreate(){
   if ( document.getElementById("createPerson").style.display ==="none"){
    document.getElementById("createPerson").style.display ="flex"
   }
   else  document.getElementById("createPerson").style.display ="none"
}

function goolkeepr(){
    document.getElementById("createGoalKeeper").style.display = "flex";
    document.getElementById("createPlayer").style.display = "none";
}


function player(){
    document.getElementById("createPlayer").style.display = "flex";
    document.getElementById("createGoalKeeper").style.display = "none";
}

function giveId(){
    return (Math.floor(Math.random()*1000000))
}
function validInput(input){
    if(input.validity.valid){
      return input.value
    }else{
      throw new Error ("you must fullfid")
    } 
}  



async function submitplayer(){
    let player={
        "Fname":validInput(document.getElementById("Fname")),
        "Lname":validInput(document.getElementById("Lname")),
        "salary":validInput(document.getElementById("salary")),
        "age":validInput(document.getElementById("age")),
        "id":"",//document.getElementById("id").value,
        "strong_leg":"",
        "position":validInput(document.getElementById("position")),
        "celebrationSentence":validInput(document.getElementById("celebrationSentence")),
    }
    if(document.getElementById('LeftLeg').checked == true) 
    player.strong_leg="Left"
    else player.strong_leg="Right" 
    document.getElementById("createPlayer").style.display = "none";
    try{
        const response=await axios.post('http://localhost:3500/createP/',
            player,
            {headers:
                {"id":giveId()}
            }   
        )
        document.getElementById("Fname").value="";
        document.getElementById("Lname").value="";
        document.getElementById("salary").value="";
        document.getElementById("age").value="";
        document.getElementById("position").value="";
        document.getElementById("celebrationSentence").value="";
    }
    catch(error){
       alert(error.response.data.error)
    }
}





async function submitKeeper(){
    let Keeper={
        "Fname":validInput(document.getElementById("Fname")),
        "Lname":validInput(document.getElementById("Lname")),
        "salary":validInput(document.getElementById("salary")),
        "age":validInput(document.getElementById("age")),
        "id":"",//document.getElementById("id").value,
        "isLeftHanded":"",
        "lastGoalConceded":validInput(document.getElementById("lastGoalConceded")),
    }
    if(document.getElementById('LeftHanded').checked == true) 
    Keeper.isLeftHanded=true
    else Keeper.isLeftHanded=false 
    document.getElementById("createGoalKeeper").style.display = "none";
    try{
        const response=await axios.post('http://localhost:3500/createP/',
            Keeper,
            {headers:
                {"id":giveId()}
            }   
        )
        document.getElementById("Fname").value="";
        document.getElementById("Lname").value="";
        document.getElementById("salary").value="";
        document.getElementById("age").value="";
        document.getElementById("lastGoalConceded").value="";
    }
    catch(error){
       alert(error.response.data.error)
    }
}