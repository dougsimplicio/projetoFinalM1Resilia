function btn() {
    
var faseDoisMom = prompt (`Chegamos em Boipeba, e a Lis está com receio de entrar na água, pois ela não sabe nadar. O que voce faz? 
Coloque 'A' para Ajudar ela a aprender a nadar, ou 'P' para trazer ela e volta para a Praia` );

while (faseDoisMom != "A" || faseDoisMom != "P") {
    
if (faseDoisMom == "A") {
    alert ("Parabéns, voce ajudou a Lis a aprender a nadar!");
    window.location.href = "faseTresMom.html"
    break
} else if (faseDoisMom == "P") {
    alert ("Tudo bem, ela terá outras oportunidades para aprender :)");
    window.location.href = "faseTresMomSand.html"
    break
}
else {
    alert ("Preencha novamente.")

    var faseDoisMom = prompt(`Chegamos em Boipeba, e a Lis está com receio de entrar na água, pois ela não sabe nadar. O que voce faz? 
    Coloque 'A' para Ajudar ela a aprender a nadar, ou 'P' para trazer ela e volta para a Praia`);
};
};
};
