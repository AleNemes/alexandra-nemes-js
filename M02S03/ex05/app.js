const p = document.getElementById('dimensions');

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  // alert('Fereastra si-a schimabt dimensiunea');
  p.innerText = `Latimea este: ${width}. Inaltimea este ${height}`;
});
