document.addEventListener('DOMContentLoaded', function() {

var dateEnd = '2020/03/20 00:00:00';              // Устонавливаем дату окончания таймера в формате yyyy/mm/dd hh:mm:ss 
var countdown = document.getElementById("tiles");

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){
    
    var today = new Date().getTime();        
    
    dateEnd = Number(new Date(dateEnd).getTime());

    var dateDef = dateEnd - today;
    
    var day1 = dateDef / 86400000;
    var dayDay = Math.floor(day1);
    
    var hours1 = (dateDef - (dayDay * 86400000)) / 3600000;
    var hoursHour = Math.floor(+hours1);
    
    var minutes1 = (dateDef - ((hoursHour * 3600000) + (dayDay * 86400000))) / 60000;
    var minutesMinute = Math.floor(minutes1);
    
    var second1 = (dateDef - ((dayDay * 86400000) + (hoursHour * 3600000) + (minutesMinute * 60000))) / 1000;
    var secondSeconds = Math.floor(second1);

    if(dayDay <= 0){
        dayDay = 0
    }
    if(hoursHour <= 0){
        hoursHour = 0
    }
    if(minutesMinute <= 0){
        minutesMinute = 0
    }
    
    countdown.innerHTML = "<span>" + dayDay + "</span><span>" + hoursHour + "</span><span>" + minutesMinute + "</span><span>" + secondSeconds + "</span>"; 
}

});
