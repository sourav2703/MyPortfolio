var timeDisplay = document.getElementById('time')


function timegen(){
    var Genrt_time = new Date()
    timeDisplay.innerHTML=Genrt_time.toLocaleTimeString()
}
setInterval(timegen,1000)