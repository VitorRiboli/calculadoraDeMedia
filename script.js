function calcular(){
    var notaUm = document.getElementById("notaUm");
    var notaUmConvertida = notaUm.value;
    var notaUmValor = parseFloat(notaUmConvertida);
    var notaDois = document.getElementById("notaDois");
    var notaDoisConvertida = notaDois.value;
    var notadoisValor = parseFloat(notaDoisConvertida);
    var notaTres = document.getElementById("notaTres");
    var notaTresConvertida = notaTres.value;
    var notaTresValor = parseFloat(notaTresConvertida);

    var mediaFinal = (notaUmValor + notadoisValor + notaTresValor) / 3;
    var mediaFinalFix = mediaFinal.toFixed(2); /*comando ToFixed serve para fixar a quantidade de casas decimais */

    console.log(mediaFinalFix);

    if (mediaFinalFix >= 7){
        var resultado = document.getElementById("valorConvertido");
        var resultadoFinal = "Parabéns, sua nota é " + mediaFinalFix + ", você foi aprovado";
        resultado.innerHTML = resultadoFinal;

    } else if (mediaFinalFix < 7) {
        var resultado = document.getElementById("valorConvertido");
        var resultadoFinal = "Sinto muito, sua nota é " + mediaFinalFix + ", você foi reprovado";
        resultado.innerHTML = resultadoFinal;
    };
};
