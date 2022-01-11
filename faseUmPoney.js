function btn() {
    
    var faseUmPoney = prompt (`Pequeno Poney, a Lis te convidou para ser o amiguinho dela durante essa aventura, voce aceita?
    Coloque 'S' para Sim ou 'N' para Não.` );
    
    while (faseUmPoney != "S" || faseUmPoney != "N") {
        
    if (faseUmPoney == "S") {
        alert (`Boa aventura!`);
        window.location.href = "faseDoisPoney.html"
        break
    } else if (faseUmPoney == "N") {
        alert (`Ok! Encontraremos outro parceiro de viagem!`);
        window.location.href = "gofup.html"
        break
    }
    else {
        alert ("Por favor preecha novamente.")
    
        var faseUmPoney = prompt (`Pequeno Poney, a Lis te convidou para ser o amiguinho dela durante essa aventura, voce aceita?
        Coloque 'S' para Sim ou 'N' para Não.`);
    };
    };
    };
    