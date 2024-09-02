





function Dividir() {

    
    
    // pegando os valores
    const valor = parseFloat(document.getElementById("valor").value);
    const pessoas = parseFloat(document.getElementById("pessoas").value);

    // Check se e zero
    if (isNaN(valor) || isNaN(pessoas)) {
        document.getElementById("resul").innerHTML = "Por favor, insira números válidos.";
        return;
    }
    if (pessoas === 0) {
        document.getElementById("resul").innerHTML = "Não é possível dividir por zero.";
        return;
    }

    // Perform division
    const resultado = valor / pessoas;

    // Display the result
    document.getElementById("resul").innerHTML ="cada uma das "+ pessoas +" pessoas ira pagar R$: "+ resultado.toFixed(2);



    document.getElementById('whatsapp-btn').addEventListener('click', function() {
        const text = encodeURIComponent("cada uma das "+ pessoas +" pessoas ira pagar R$: "+ resultado.toFixed(2));
        const url = encodeURIComponent(window.location.href);
        window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    });
    
    document.getElementById('telegram-btn').addEventListener('click', function() {
        const text = encodeURIComponent("cada uma das "+ pessoas +" pessoas ira pagar R$: "+ resultado.toFixed(2));
        const url = encodeURIComponent(window.location.href);
        window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    });






    const dialog = document.getElementById("dialog");
   
    dialog.showModal();

    const fecharmodal=document.getElementById("fechar-modal"); 

    fecharmodal.addEventListener('click',()=>{
      dialog.close();
    })
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        Dividir();
    
    }
});




























//animaçao do h1//
window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}