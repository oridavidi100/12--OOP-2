
class ClasicGuiter{
    #id;
    constructor(manufactureYear,brand,price,id){
        this.manufactureYear=manufactureYear;
        this.brand=brand;
        this.price=price;
        this.numberOfString=6;
        this.used=false;
        this.#id=id;
    }
    play(){
        this.price=this.price*0.9
        this.used=true
        return ("πΆπΆπΆ")
    }
    get getPrice(){
        return (this.price)
    }
    set setPrice(value){
        this.price=value
    }
    get getManufactureYear(){
        return (this.manufactureYear,this.brand,this.#id)
    }
    get getBrand(){
        return (this.brand)
    }
    get getId(){
        return (this.#id)
    }
    static detectSound(detect){
        if (detect==="πΈ") return ("ElectricGuitar")
        if (detect==="π") return ("BassGuitar")
    }
    
}
class ElectricGuitar extends ClasicGuiter {
    constructor(manufactureYear, brand,price,longNack) {
      super(manufactureYear, brand,price);
      this.longNack=longNack;
      this.numberOfString=4;
    }
    play(){
        this.price=this.price*0.9
        this.used=true
        return("πΈπΈπΈ")
    }
    playSolo(){
        let arrEmoji=[ "π₯", "π€", "π΅", "π’", "π’", "πΊ"]
        return (arrEmoji[Math.floor(Math.random()*6)])
    }
}





let nw=  new ClasicGuiter(2999,"ori",3434)
let elecric=new ElectricGuitar
console.log(ClasicGuiter.detectSound("π"))
//nw.setPrice=350;
//return (nw)
//nw.getBrand
//return (clasicGuiter.detectSound("π"))