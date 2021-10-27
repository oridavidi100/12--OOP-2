
document.getElementById("player").addEventListener("click",player)
document.getElementById("goolkeeper").addEventListener("click",goolkeepr)
document.getElementById("createGoalKeeper").style.display ="none";
document.getElementById("createPlayer").style.display = "none";
document.getElementById("submitPlayer").addEventListener("click",submitplayer)
document.getElementById("submitKeeper").addEventListener("click",submitKeeper)
document.getElementById("createPerson").style.display = "none";
document.getElementById("Fbutton").addEventListener("click",startCreate)
document.getElementById("Sbutton").addEventListener("click",startSearch)
document.getElementById("search").style.display ="none"
document.getElementById("Tbutton").addEventListener("click",showTeam)
document.getElementById("submitSearch").addEventListener("click",searcPlayer)

function startCreate(){//shows the create player
   if ( document.getElementById("createPerson").style.display ==="none"){
    document.getElementById("createPerson").style.display ="flex"
    document.getElementById("teamCollection").style.display ="none";
     document.getElementById("search").style.display ="none"
   }
   else  document.getElementById("createPerson").style.display ="none"
}
function startSearch(){//show the search input
    if ( document.getElementById("search").style.display ==="none"){
        document.getElementById("search").style.display ="flex"
        document.getElementById("teamCollection").style.display ="none";
        document.getElementById("createPerson").style.display ="none"
        }
        else  document.getElementById("search").style.display ="none"
}

async function showTeam(){//shows the team
    document.getElementById("search").style.display ="none"
    document.getElementById("createPerson").style.display ="none"
    document.getElementById("teamCollection").style.display ="flex";
    teamCollection=document.getElementById("teamCollection");
    teamCollection.innerText="team";
    let response =await axios.get("http://localhost:3500/")
    for (let player of response.data){
        player=JSON.parse(player)
        let coll =document.createElement("ul")
        coll.style.background="white"
        let position;
        if (player.hasOwnProperty('position')){
            position=player.position
        }
        else position="Gk"
        coll.innerText=position
        for (let key in player){
        if(key!=="position"){
            if (key==="isLeftHanded"){
                console.log("first if")
                if(player[key]===true){
                    console.log("second if")
                    let li=document.createElement("li")
                    li.innerText="strong hand : left " 
                    coll.appendChild(li)
                }
                else {
                    let li=document.createElement("li")
                    li.innerText="strong hand" +" : right " 
                    coll.appendChild(li)
                }
            }
            else{
                li.innerText=key +" : " +player[key]
                coll.appendChild(li)
                }
                let li=document.createElement("li")
                li.innerText=key +" : " +player[key]
                coll.appendChild(li)
            }
        }
        }
        teamCollection.appendChild(coll)
    }


async function searcPlayer(){

    let searching =document.getElementById("searchPlayer").value
    let searchCollection=document.getElementById("searchCollection")
  // try{
    let response =await axios.get(`http://localhost:3500/${searching}`)
    if(response.data===[])return alert("not found")
    for (let player of response.data){
        let coll =document.createElement("ul")
        coll.style.background="white"
        let position;
        if (player.hasOwnProperty("position")){
            position=(player).position
        }
        else position="Gk"
        coll.innerText=position
        for (let key in player){
            if(key!=="position"){
                if (key==="isLeftHanded"){
                    console.log("first if")
                    if(player[key]===true){
                        console.log("second if")
                        let li=document.createElement("li")
                        li.innerText="strong hand : left " 
                        coll.appendChild(li)
                    }
                    else {
                        let li=document.createElement("li")
                        li.innerText="strong hand" +" : right " 
                        coll.appendChild(li)
                    }
                }
                else{
        let li=document.createElement("li")
        li.innerText=key +" : " +player[key]
        coll.appendChild(li)
        }
    }
    }
        searchCollection.appendChild(coll)
    }
    //}
    // catch{
    // alert("not found")
    // }
}



function goolkeepr(){//show goalkeeper
    document.getElementById("createGoalKeeper").style.display = "flex";
    document.getElementById("createPlayer").style.display = "none";
}


function player(){//show player
    document.getElementById("createPlayer").style.display = "flex";
    document.getElementById("createGoalKeeper").style.display = "none";
}

function giveId(){//giv random id
    return (Math.floor(Math.random()*1000000))
}

function validInput(input){//check if the inout is valid
    if(input.validity.valid){
      return input.value
    }else{
      throw new Error ("you must fullfid")
    } 
}  

async function submitplayer(){//submit to new player
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
        const response=await axios.post('http://localhost:3500/P/createP/',
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



async function submitKeeper(){//submit keeper
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
        const response=await axios.post('http://localhost:3500/K/createk/',
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