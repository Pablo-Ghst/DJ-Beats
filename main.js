function TocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const ListaDeTeclas = document.querySelectorAll('.tecla');


 for (let contador = 0; contador < ListaDeTeclas.length; contador++){
     const tecla = ListaDeTeclas[contador];
     const instrumento = tecla.classList[1];
     const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
    TocaSom(idAudio);
}
    tecla.onkeydown = function(evento){
         if(evento.code == 'Space'){
        tecla.classList.add('ativa');
        } else {tecla.classList.remove('ativa');
        }
}

tecla.onkeyup = function(){ 
    tecla.classList.remove('ativa');
}

tecla.onkeydown = function(evento){
    if(evento.keyCode == '67'){
        som_tecla_kick.currentTime=0
        som_tecla_kick.play();
            ListaDeTeclas[0].classList.add('ativa');
        } else {ListaDeTeclas[0].classList.remove('ativa');
    
    }
    if(evento.keyCode == '8'){
        som_tecla_clap.currentTime=0
        som_tecla_clap.play();
        ListaDeTeclas[1].classList.add('ativa');
    } else {ListaDeTeclas[1].classList.remove('ativa');

}
if(evento.keyCode == '90'){
    som_tecla_hat.currentTime=0
    som_tecla_hat.play();
    ListaDeTeclas[2].classList.add('ativa');
} else {ListaDeTeclas[2].classList.remove('ativa');

}
if(evento.keyCode == '71'){
    som_tecla_tom.currentTime=0
    som_tecla_tom.play();
    ListaDeTeclas[3].classList.add('ativa');
} else {ListaDeTeclas[3].classList.remove('ativa');

}
if(evento.keyCode == '83'){
    som_tecla_open.currentTime=0
    som_tecla_open.play();
    ListaDeTeclas[4].classList.add('ativa');
} else {ListaDeTeclas[4].classList.remove('ativa');

}
if(evento.keyCode == '79'){
    som_tecla_ride.currentTime=0
    som_tecla_ride.play();
    ListaDeTeclas[5].classList.add('ativa');
} else {ListaDeTeclas[5].classList.remove('ativa');

}
if(evento.keyCode == '68'){
    som_tecla_snare.currentTime=0
    som_tecla_snare.play();
    ListaDeTeclas[6].classList.add('ativa');
} else {ListaDeTeclas[6].classList.remove('ativa');

}
if(evento.keyCode == '73'){
    som_tecla_tic.currentTime=0
    som_tecla_tic.play();
    ListaDeTeclas[7].classList.add('ativa');
} else {ListaDeTeclas[7].classList.remove('ativa');

}
if(evento.keyCode == '72'){
    som_tecla_surdo.currentTime=0
    som_tecla_surdo.play();
    ListaDeTeclas[8].classList.add('ativa');
} else {ListaDeTeclas[8].classList.remove('ativa');


   


            
   
}


}
}




