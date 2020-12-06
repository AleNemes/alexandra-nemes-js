const p = document.getElementById('dimensions');

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  // alert('Fereastra si-a schimabt dimensiunea');
  p.innerText = `Latimea este: ${width}. Inaltimea este ${height}`;

  const paragraph = document.createElement('p');
  const message = 'Fereastra si-a schimbat dimensiunea orizontala.';
  paragraph.innerText = message;

  document.body.appendChild(paragraph);

  const para = document.createElement('p');
  let surface = width * height;
  const text = `Fereastra are acum suprafata de ${surface} pixeli.`;
  para.innerText = text;

  document.body.appendChild(para);
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
