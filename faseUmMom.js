function btn() {
    
var faseUmMom = prompt(`Você recebeu um convite de uma amiga querida para passar suas férias na nova casa dela, no sul da Baeeea. 
Você aceita? (Coloque 'S' para Sim, ou 'N' para Não.`);

while (faseUmMom != "S" || faseUmMom != "N") {
    
if (faseUmMom == "S") {
    alert ("Aproveite a viagem!");
    window.location.href = "faseDoisMom.html"
    break
} else if (faseUmMom == "N") {
    alert ("Curta as férias em casa!");
    window.location.href = "gofum.html"
    break
}
else {
    alert ("Preencha novamente.")

    var faseUmMom = prompt(`Você recebeu um convite de uma amiga querida para passar suas férias na nova casa dela, no sul da Baeeea. 
    Você aceita? (Coloque 'S' para Sim, ou 'N' para Não.`);
};
;}
};
