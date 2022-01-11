function btn() {
    
    var faseDoisPoney = prompt (`A Lis está com uma dúvida, voce pode ajudá-la?
    O que machuca mais, um ferrão de arraia ou uma queimadura de água-viva
    Coloque 'F' para Ferrão, 'Q' para queimadura ou 'M' para Manter distância das duas.` );
    
    while (faseDoisPoney != "F" || faseDoisPoney != "Q" || faseDoisPoney != "M") {
        
    if (faseDoisPoney == "F") {
        alert ("Como voce chegou a essa conclusão? \n Acho melhor voce pensar um pouquinho mais.");
        var faseDoisPoney = prompt(`A Lis está com uma dúvida, voce pode ajudá-la?
        O que machuca mais, um ferrão de arraia ou uma queimadura de água-viva
        Coloque 'F' para Ferrão, 'Q' para queimadura ou 'M' para Manter distância das duas.`);
    } else if (faseDoisPoney == "Q") {
        alert ("Como voce chegou a essa conclusão? \n Acho melhor voce pensar um pouquinho mais.");
        var faseDoisPoney = prompt(`A Lis está com uma dúvida, voce pode ajudá-la?
        O que machuca mais, um ferrão de arraia ou uma queimadura de água-viva
        Coloque 'F' para Ferrão, 'Q' para queimadura ou 'M' para Manter distância das duas.`);
    } else if (faseDoisPoney == "M") {
        alert ("Melhor resposta! #poneysensato")
        window.location.href = "./faseTresPoney.html"
        break
    }
    else {
        alert ("Preencha novamente.")
    
        var faseDoisPoney = prompt(`A Lis está com uma dúvida, voce pode ajudá-la?
        O que machuca mais, um ferrão de arraia ou uma queimadura de água-viva
        Coloque 'F' para Ferrão, 'Q' para queimadura ou 'M' para Manter distância das duas.`);
    };
    };
    };