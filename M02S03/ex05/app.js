const p = document.getElementById('dimensions');
const paragraph = document.getElementById('paragraph');
const para = document.getElementById('para');

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  // alert('Fereastra si-a schimabt dimensiunea');
  p.innerText = `Latimea este: ${width}. Inaltimea este ${height}`;

  const message = 'Fereastra si-a schimbat dimensiunea orizontala.';
  paragraph.innerText = message;

  let surface = width * height;
  const text = `Fereastra are acum suprafata de ${surface} pixeli.`;
  para.innerText = text;
});

document.addEventListener('DOMContentLoaded', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let surface = width * height;

  const p = document.createElement('p');
  const message = `Fereastra are suprafata de ${surface} pixeli.`;
  p.innerText = message;

  document.body.appendChild(p);
});
