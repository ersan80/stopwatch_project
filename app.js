const play = document.getElementById("play");
const stop = document.getElementById("stop");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");
const reset = document.getElementById("reset");
const result = document.querySelector(".result");

play.addEventListener("click",(e)=>{
  setInt()
  
});

let count = 1
stop.addEventListener("click",()=>{
    
    clearInterval(sett)
    result.innerHTML+= `<p>${count}. degree : <b> ${hour.innerText}:${minutes.innerText}:${seconds.innerText}:${miliseconds.innerText} </b></p> `
    count++

});

reset.addEventListener("click",()=>{
      window.location.reload()
});

let sett;
function setInt(){
let min =1
let mil = 1
let count= 0
sett=setInterval(()=>{
    miliseconds.innerText = count
    count++
    if(count == 100){

         (seconds.innerText)++ 
         miliseconds.innerText=0
        count = 0 
        }
    if(seconds.innerText == 59){
         if(minutes.innerText<9){        
            minutes.innerText= "0"+min
            min++
        }
        else{
            (minutes.innerText)++
        } 
        seconds.innerText=00
    }
    if(minutes.innerText==59){
        hour.innerText++;
        minutes.innerText=00;
    }
},10)
}  

function cleInt(){

    clearInterval(setInt())

}



