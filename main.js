var Letras;
var palavra_secreta;
var Banco_de_palavras;
alert("Se estiver em um disitivo telemovel, ative o modo rotação automatica.");
window.onload = function init() {  //chama a funcão quando a janela e carregada(linha: 4 - 28)
    var teclado = document.getElementById("teclado");
    var palavrachave = document.getElementById("palavrachave");
    var letrachave = document.getElementById("letrachave");
    var i;

    palavrachave.style.color = "red";

    Banco_de_palavras = [ 'petroleo', 'louco',  'peteleco',
        'reboque', 'cadafalso', 'cadeira', 'cola', 'rebento',
        'defumado', 'discurso', 'eletrodomestico', 'eletronica',
        'engrenagem', 'esfomeado', 'ferralheiro', 'ferrovia',
        'fertil', 'fortaleza', 'fortificante', 'oficina',
        'orçamento', 'palavra', 'preocupacao', 'radiologia',
        'radiografia', 'granja', 'granulado', 'induzido',
        'imbativel', 'industria', 'internacional', 'labirinto',
        'lobisomem', 'locomotiva', 'brasil', 'doido', 
        'lagrima', 'casa', 'bobeira', 'marcos', 'selio', 'jogo', 'mapa',
        'babado', 'ana', 'critico', 'windows', 'luta', 'macaco', 'panela',
        'frederico', 'fofura', 'grafico', 'mula', 'cavalo', 'escola', 'mouse',
        'marrom', 'porta', 'massa', 'palha', 'pupila'];
        
    

    var rand = Math.floor(Math.random() * Banco_de_palavras.length);
    palavra_secreta = Banco_de_palavras[rand].toUpperCase().split("");

    for(i=0; i<palavra_secreta.length; i++){ 
        var escondido = "style='visibility:hidden;'";
        palavrachave.innerHTML += "<div id='cor' class='group key'><div class= 'group char' " + escondido + " id='ltr" + i + "'>" + palavra_secreta[i] + "</char><cor";
    
    }

        for(i = 0; i < letras.length; i++){
            var lString = "Chute('" + letras[i] + "')";
            var idtecla = "id='" + letras[i] + "'";
            teclado.innerHTML += "<button class='tecla' " + idtecla + " onclick=" + lString + ">" + letras[i] + "</button>";
        }
};


var fim_de_jogo = false;
var valid = false; 
var erros = 0;
var acertos = 0; 