function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    this.work = function(){
        console.log("Solving bugs from 12")
    }

}

let alien1 = new Alien('Kishan', 'JS');
let alien2 = new Alien('Mansi', 'Java');

alien1.tech = 'Blockchain';

console.log(alien1);
alien1.work();