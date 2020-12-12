const img = document.querySelector('.image');
// img.pareent() <- jQuery
const paragraph = img.parentElement;
const loadedMessage = 'Imaginea s-a incarcat.';
const p = document.getElementById('p');
const loader = document.querySelector('.loader');

img.addEventListener('load', () => {
  const messageContainer = document.createElement('span');
  messageContainer.innerText = loadedMessage;

  paragraph.append(messageContainer);
  loader.remove();
  // const pContainer = document.createElement('span');
  // pContainer.innerText = loadedMessage;

  // p.append(pContainer);

  img.addEventListener('click', () => {
    alert('Imaginea s-a incarcat');
  });
});
