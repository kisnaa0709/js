let count = 0
let countt = document.getElementById("log")
function log(){
    count = count + 1;
     countt.textContent = count;
}
let savee = document.getElementById("save")

function save() {
    let saving =" " + count + " | "
    savee.textContent += saving
    countt.textContent = 0
    count = 0
}