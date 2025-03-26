document.getElementById("marketing").addEventListener("input", function() {
    document.getElementById("marketing-value").innerText = this.value;
});

function submitDecision() {
    const rate = document.getElementById("rate").value;
    const marketing = document.getElementById("marketing").value;
    
    // Simuliere Ergebnisse (dies ist eine sehr einfache Berechnung, du kannst es anpassen)
    const revenue = rate * 100;  // Einfaches Beispiel
    const guestSatisfaction = 100 - marketing;  // Je mehr Marketing, desto besser die Zufriedenheit
    const gop = revenue - (marketing * 10);  // GOP berücksichtigt Marketing-Kosten

    const resultsTable = document.querySelector("tbody");
    const newRow = resultsTable.insertRow();
    
    const quarterCell = newRow.insertCell(0);
    const revenueCell = newRow.insertCell(1);
    const satisfactionCell = newRow.insertCell(2);
    const gopCell = newRow.insertCell(3);

    quarterCell.innerText = "Q1";
    revenueCell.innerText = `$${revenue}`;
    satisfactionCell.innerText = `${guestSatisfaction}%`;
    gopCell.innerText = `$${gop}`;

    // Setze die Eingaben zurück, wenn die Entscheidung abgeschickt wurde
    document.getElementById("rate").value = 150;
    document.getElementById("marketing").value = 50;
    document.getElementById("marketing-value").innerText = 50;
}
