


var line =document.getElementById("line-m")
setInterval(function(){
var hours=time.getHours()*30;
var time = new Date();
var min=time.getMinutes()*6;
line.style.transform = "rotate("+min+"deg)";
lineh.style.transform="rotate("+hours+"deg)";
}, 100);
