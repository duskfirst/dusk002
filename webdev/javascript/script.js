const me ={
    name: "Ghoda",
    age: 13,
    enryr: 20,
    branch: "Chane",
    rollno: 7,
    printRoll:function() {
        return this.enryr + this.roll + "" + this.branch+ this.name;        
    }
}

console.log(me["age"]);
const x =me.printRoll();
console.log(me.printRoll);