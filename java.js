// Sélection des éléments du DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 1. Écouter la soumission du formulaire
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const taskText = todoInput.value;
    if (taskText !== "") {
        addTask(taskText);
        todoInput.value = ""; // Vide le champ après l'ajout
    }
});

// 2. Fonction pour créer et ajouter une tâche
function addTask(text) {
    const li = document.createElement('li');

    // Contenu de la tâche (le texte)
    const span = document.createElement('span');
    span.innerText = text;

    // Bouton pour marquer comme accomplie
    const checkBtn = document.createElement('button');
    checkBtn.innerText = "✔";
    checkBtn.classList.add('check-btn');
    checkBtn.onclick = function() {
        span.classList.toggle('completed');
    };

    // Bouton pour supprimer la tâche
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "🗑";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Assemblage de l'élément li
    li.appendChild(span);
    const btnGroup = document.createElement('div');
    btnGroup.appendChild(checkBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);

    // Ajout à la liste <ul>
    todoList.appendChild(li);
}
