function getfastlapi(l1, l2){
    if (l1.cpu>l2.cpu)
        console.log(l1);
    else
        console.log(l2);
}
let laptop1 = {
    cpu: 'i5',
    ram: 16,
    brand: 'HP',
    compare: function (other) {
       if (this.cpu>other.cpu)
            console.log(this);
        else
            console.log(other);
    },
    getConfig: function(){
         console.log(this.cpu);
     }
}
let laptop2 ={
    cpu: 'i9',
    ram: 12,
    brand: 'ASUS',
     
     getConfig: function(){
          
          console.log(this.cpu);
     }
}
laptop1.compare(laptop2);