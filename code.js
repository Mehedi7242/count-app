// document.getElementById("count-el").innerText=43;

let x = 0;
let saveEl=document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;



function increment() {
    count += 1
    countEl.innerText=count;

}
function reset() {


    document.getElementById("count-el").innerText=count=0;
}

function  save () {
    let countStr = count +" - "
    saveEl.innerText +=countStr;

};

function historyReset() {
    document.getElementById("save-el").innerText=null;
}