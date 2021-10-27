

class Person{
    #id;
    constructor(_firstName,_sureName,_salary,_age,_id){
        this.firstName=_firstName;
        this.sureName=_sureName;
        this.salary=_salary;
        this.age=_age;
        this.#id=_id;
    }
    get name(){
       return (this.firstName,this.sureName)
    }
    get getSalary(){
        return this.salary
    }
    get getAge(){
        return this.age
    }
    get getId(){
    return  this.#id
    }
    set setSalary(salary){
        this.salary=salary
    }
    set setAge(age){
        this.age=age
    }
    set setId(id){
        this.#id=id
    }
}

class Player extends Person{
    constructor(_firstName,_sureName,_salary,_age,_id,_strongLeg,_position,_celebrationSentence) {
    super(_firstName,_sureName,_salary,_age,_id);
    this.strongLeg=_strongLeg
    this.position=_position
    this.celebrationSentence=_celebrationSentence
    }
    goalClebration(){
        this.salary=this.salary*1.025
        return (this.celebrationSentence)
    }
    get getStrongLeg(){
        return this.strongLeg
    }
    get getCelebrationSentence(){
        return this.celebrationSentence
    }
    get getPosition(){
        return this.position
    }
    set setPosition(value){
        this.position=value
    }

}

class GoalKeeper  extends Person{
    constructor(_firstName,_sureName,_salary,_age,_id,_isLeftHanded,_lastGoalConceded) {
    super(_firstName,_sureName,_salary,_age,_id);
    this.isLeftHanded=_isLeftHanded
    this.lastGoalConceded=_lastGoalConceded ; 
    }
    get getHisHand(){
        if(this.isLeftHanded) return "left"
        else return "right"
    }
    concededAGoal(){
        this.salary=this.salary*0.975
        this.lastGoalConceded=new Date()
    }
    get getIsLeftHanded(){
        return this.isLeftHanded
    }
    set setIsLeftHanded(value){
        this.isLeftHanded=value
    }
}



let ori=new GoalKeeper("ori","davidi",100,21,2,true)
ori.concededAGoal()
console.log(ori.getHisHand)

module.exports= {Player,GoalKeeper}