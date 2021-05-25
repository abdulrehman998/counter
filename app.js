  
var startingminutes = prompt("Enter Time in Minutes");
let time = startingminutes * 60;
var counter = document.getElementById("counter");
var btndis = document.getElementById('disabled')
var interval;


function updatecounter(){
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    counter.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;   
    
}
function start(){ 
    
    interval = setInterval(updatecounter,1000);
    btndis.disabled = true
}

function pause(){
    clearInterval(interval)
    btndis.disabled = false
}