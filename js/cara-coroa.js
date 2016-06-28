var jogadas = 0;
var cara = 0;
var coroa = 0;
var imgLoad;

function jogar() {

    var flag = Math.floor(Math.random() * 2);
    jogadas++;

    switch(flag) {
        case 0:
            coroa++;
            loadImagem('img/coroa.png');
            break;
        case 1:
            cara++;
            loadImagem('img/cara.png');
            break;
        default:
            loadImagem('img/no-image.png');
    }

    setPlacar();
}

function limpar() {
    jogadas = 0;
    cara = 0;
    coroa = 0;
    document.getElementById('moeda').setAttribute('src' , '');
    setPlacar();
}

function setPlacar() {
    document.getElementsByClassName('jogadas')[0].setAttribute('value', jogadas);
    document.getElementsByClassName('coroas')[0].setAttribute('value', coroa);
    document.getElementsByClassName('caras')[0].setAttribute('value', cara);
}


function loadImagem(img) {
	imgLoad = new Image();
	imgLoad.src = img;
	setTimeout('verificaCarregamento()', 1);
}

function verificaCarregamento() {
	if(imgLoad.complete) {
		document.getElementById('moeda').setAttribute('src' , imgLoad.src);
	} else {
		setTimeout('verificaCarregamento()', 1);
	}
}
