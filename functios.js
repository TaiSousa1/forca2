

function Perdeu(){
    document.getElementById("resultado").innerHTML = "<div id='lose'>VOCE PERDEU!</div>";
    fim_de_jogo = true;
    document.getElementById("again").innerHTML = "<button onclick='init()'>Novo Jogo</button>";
    for(i=0; i<palavra_secreta.length; i++){
        document.getElementById("ltr" + i).style.visibility = "visible";
    }
}


function Ganhou(){
    document.getElementById("resultado").innerHTML = "<div id='win'>VOCE GANHOU!</div>";
    
    document.getElementById("again").innerHTML = "<button onclick='window.location.reload()'>Novo Jogo</button>";
    
    fim_de_jogo = true;
}

function Again(){
    history.go(0);
}

function Chute(ltr){
             
    if(fim_de_jogo == false){   
        for(var j = 0; j < palavra_secreta.length; j++){
            if((ltr == palavra_secreta[j])&&(erros < 7)){
                var idltr = "ltr" + j;
                document.getElementById(idltr).style.visibility = "visible";
                document.getElementById(idltr).style.color = "green";
                document.getElementById(ltr).style.backgroundColor = "green";
                acertos+=1;
                valid = true;
                
            };
        };
        //Confere fora da Iteração se a letra esta errada (linha: 58-61).
        if((valid == false)&&(erros <= 7)){
            document.getElementById(ltr).style.backgroundColor = "red";
            erros+=1;
        }; if((valid == false)&&(erros >= 7)){ 
            Perdeu()
        }else if(acertos == palavra_secreta.length){
            Ganhou();
        };
    };
    valid = false;
    document.getElementById("falhas").innerHTML = erros;
    document.getElementById(ltr).setAttribute('onclick','chute("")');
};