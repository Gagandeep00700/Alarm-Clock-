document.addEventListener('DOMContentLoaded',function(){
function getCurrentTime(){
let local_time=new Date();
let hours=local_time.getHours()
let min=local_time.getMinutes()
return hours+":"+(min<10?'0':'')+min;
}
function playalarm() {
  let audio=new Audio('/Assets/Masha.mp3')
  audio.play().catch(error=>{
    console.error('failed to play:',error)
  })
}
let time=document.getElementById('alarm_time')
let button=document.getElementById('set_alarm')
let intervalId;
button.addEventListener('click',function(e){
 let alarm_time=time.value
 if(intervalId){
   clearInterval(intervalId)
 }
   intervalId = setInterval(function() {
        let current_time = getCurrentTime();
        console.log("Checking time... Alarm time: " + alarm_time + ", Current time: " + current_time);
        if(alarm_time === current_time) {
          playalarm();
          clearInterval(intervalId); // Clear the interval once the alarm goes off
        }
      }, 1000); 
})})