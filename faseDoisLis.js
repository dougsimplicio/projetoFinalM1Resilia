function btn() {
    
var faseDoisMom = prompt ("Chegamos na Praia! \n Voce ainda não sabe nadar, quer aprender? \n Coloque 'S' sim ou 'N' para não." );

while (faseDoisMom != "S" || faseDoisMom != "N") {
    
if (faseDoisMom == "S") {
    alert ("Parabéns Lis! Voce aprendeu a nadar!");
    window.location.href = "faseTresLis.html"
    break
} else if (faseDoisMom == "N") {
    alert ("Tudo bem, voce pode aprender outro dia :)");
    window.location.href = "faseTresLisSand.html"
    break
}
else {
    alert ("Que tal preencher novamente?")

    var faseDoisMom = prompt ("Chegamos na Praia! \n Voce ainda não sabe nadar, quer aprender? \n Coloque 'S' sim ou 'N' para não.");
};
};
};
