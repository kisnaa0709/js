// let day = "Monday"
// switch(day){
//     case 'Monday':
//         console.log("7am");
//         break;
//     case 'Tuesday':
//         console.log("4am");
//         break;
//     case 'Wednesday':
//         console.log("4am");
//         break;
//     case 'Thusday': 
//         console.log("4am");
//         break;
//     case 'Friday':
//         console.log("9am");
//         break;
//     case 'Saturday':
//         console.log("8am");
//         break;
//     case 'Sunday':
//         console.log("8am");
//         break;
//     default:
//         console.log("Sleep");
// }
// console.log("Bye");
// console.log('ji');
// let num1 = 2232
// let num2 = 120
// let result = num1 + num2
// console.log(`the sum of ${num1} and ${num2} = ${result}` );
// let i = 1;
// while (i<=5) {
//     console.log("kishan",i);
//     i++;
// }
// console.log('\n');

// for (let i = 1; i <= 5; i++) {
//     console.log("singh",i);
    
// }

function my() {
    var Radius = prompt("Radius");
    var Area = (22/7*Radius*Radius);
    document.write("Area of Circle = " + Area.toFixed(3));
}
function my1() {
    var Radius = prompt("Radius");
    var Perimeter = (22/7*2*Radius).toFixed(3);
    document.write("Perimeter of Circle = " + Perimeter);
}

function city() {
    var City = prompt("Enter the city Name");
    var len = City.length;
    if (City[0] === City[len-1]) {
        document.write("Equal");  
    }else{
        document.write("Not Equal");
    }
}

function Cap() {
    document.write("Before : ");
    for (let i = 1; i <= 5; i++) {
    var city = prompt("Enter the city Names"); 
    String[i]= city;  
    document.write((" "),[i],(":"),(" "),String[i],(","));
    }
    
    document.write("  After : ");
    for (var i = 1; i<=5; i++) {
    String[i] = String[i].charAt(0).toUpperCase() + String[i].slice(1);   
    document.write((" "),[i],(":"),(" "),String[i],(","));
}
}

function asdf() {
    var print = prompt("NAME OF CITY");
    if(print[0] === "a"|| print[0] === "e"|| print[0] === "i"|| print[0] === "o"|| print[0] === "u"|| print[0] === "A"|| print[0] === "I"|| print[0] === "E"|| print[0] === "O"|| print[0] === "U" )
    {
        document.write("YES");  
    }else{
        document.write("NO");
    }
    
}

function floyd() {
    var print = prompt("Number of rows");
    for (let i = 1; i <= print ; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j);
           
               
        }

        document.write("<br />");
    }

    
}