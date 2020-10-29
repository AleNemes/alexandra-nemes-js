let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
  alert('Ai apasat butonul!');
};

button.addEventListener('click', clickHandler);

// Pct 1 Folosind codul de la exercitiul 08, numeste functia care ruleaza
//  la click clickHandler si foloseste-i numele ca parametru al metodei
//  addEventListener in locul celei anonime.

// Pct 2 Adauga un buton pe care scrie Elimina Evenimentul.
// Pct 3 La click pe acest buton nou, foloseste metoda removeEventListener al
//  variabilei button si foloseste numele clickHandler ca parametru.

removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});
