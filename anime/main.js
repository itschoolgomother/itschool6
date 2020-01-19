 
 var got =prompt("какой цвет","red")
 var radius =prompt("radius","25")
 var sieze = prompt("какой размер ви виберите","100")
var box= document.getElementById("box")
var age =prompt("ваш возраст","13лет")
var  name = prompt("имя","lesha");
alert("hi "+ name +" "+ age)

box.style.width= sieze+"px"
box.style.height=sieze+"px"
box.style.backgroundColor=got
box.style.borderRadius=radius+"%"