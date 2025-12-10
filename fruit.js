
        // Tableau avec 5 fruits
        let fruits = ["Mangue", "Banane", "Pomme", "Orange", "Raisin"];

        // On sélectionne le tbody
        let tableau = document.getElementById("tableFruits");

        // Affichage des fruits
        for (let i = 0; i < fruits.length; i++) {
            let ligne = document.createElement("tr");
            let cellule = document.createElement("td");
            cellule.textContent = fruits[i];

            ligne.appendChild(cellule);
            tableau.appendChild(ligne);
        }
  