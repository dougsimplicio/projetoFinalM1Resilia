function btn() {
    
var faseUmLis = prompt("Esquecemos o endereço da Camila! \n Escreva o nome da Ilha para que possamos comprar a passagem!");

while (faseUmLis != "Boipeba" || faseUmLis == "Boipeba") {
    
if (faseUmLis == "Boipeba") {
    alert ("Obrigado! Agora podemos ir viajar!");
    window.location.href = "faseDoisLis.html"
    break
}
else {
    alert ("Acho que tem algo errado, vamos tentar novamente?")

    var faseUmLis = prompt ("Esquecemos o endereço da Camila! \n Escreva o nome da Ilha para que possamos comprar a passagem!")
}
}
};