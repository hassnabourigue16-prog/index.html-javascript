// --- Création de la 'div' et du paragraphe 'p' ---

// 1. Créer une nouvelle div
const maDiv = document.createElement('div');

// 2. Créer un paragraphe p
const monParagraphe = document.createElement('p');

// 3. Ajouter du texte initial
monParagraphe.textContent = "Ceci est un paragraphe";

// Assemblage : on met le p dans la div, et la div dans le body
maDiv.appendChild(monParagraphe);
document.body.appendChild(maDiv);


// --- Modification du texte ---

// Modifier le texte après la création
monParagraphe.textContent = "Le texte a été modifié";


// --- Modification du style CSS ---

// Changer la couleur de fond et centrer le texte
monParagraphe.style.backgroundColor = "lightblue";
monParagraphe.style.textAlign = "center";
monParagraphe.style.padding = "10px"; // Optionnel : pour plus de lisibilité


// --- Ajout d'un événement ---

// Ajouter un événement "click" à la div
maDiv.addEventListener('click', () => {
    monParagraphe.textContent = "Un clic a été détecté";
});
