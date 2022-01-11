function btn() {
    
var faseTresMom = prompt (`Último dia na Ilha! 
Sua próxima decisão é muito importante!
Voce irá voltar para São Paulo, ficará na ilha vivendo das coisas que a natureza dá, ou vai comprar um Motorhome e cair na estrada?
Type I for Island, C for City or N for Nomadism.
 ` );

while (faseTresMom != "I" || faseTresMom != "C" || faseTresMom != "N") {
    
if (faseTresMom == "I") {
    alert ("Parabéns! Voce optou por uma vida perto da natureza!");
    window.location.href = "finalMomIsland.html"
    break
} else if (faseTresMom == "C") {
    alert ("Parabéns, voce optou por viver na maior cidade da América Látina!");
    window.location.href = "finalMomCity.html"
    break
} else if (faseTresMom == "N") {
    alert ("Parabéns, voce optou por uma vida na estrada!");
    window.location.href = "finalMomNomadism.html"
    break
}
else {
    alert ("Preencha novamente.")

    var faseTresMom = prompt(`Últimmo dia na Ilha! 
    Sua próxima decisão é muito importante!
    Voce irá voltar para São Paulo, ou ficará na ilha vivendo das coisas que a natureza dá?
    Type i for Island, or c fo City.     `);
};
};
};