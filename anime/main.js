 var box=document.getElementById("box");
 var rand= Math.random() * 500;
var randr =Math.random() * 255
var randg =Math.random() * 255
var randb =Math.random() * 255


box.style.width = rand+"px"
box.style.height ="100px"
box.style.backgroundColor ="rgb("+randr+","+randg+","+randb+")"


for (var i=0;i<100;i++){
	box.innerHTML += '<div class="box"></div>'
}
 // var usd = 24.42
 // var test = prompt("grn","1000");

 // var usd	 = 24;
 // var euro = 26;
 // var bitcoin = 193765;
 // var plzol = 6;
 // var bitcoincash = 6308;
 // var afganistan = 0,31


 // alert(Math.round(test/usd)+"  usd");
 // alert(Math.round(test/euro)+"  euro");
 // alert(Math.round(test/bitcoin)+"  bitcoin");
 // alert(Math.round(test/plzol)+"  plzol");
 // alert(Math.round(test/bitcoincash)+"  bitcoincash");
 // alert(Math.round(test/afganistan)+"  afganistan");

