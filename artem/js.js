let hero = document.getElementById('hero');
let x = 10;

document.addEventListener("keydown", move);
function move(e) {
	switch(e.keyCode){
		case 68:
		hero.style.left = + "px";
		x+=50;
		break;
	}
}

