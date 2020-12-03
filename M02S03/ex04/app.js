const img = document.querySelector('.image');
// img.pareent() <- jQuery
const paragraph = img.parentElement;
const loadedMessage = 'Imaginea s-a incarcat.';

img.addEventListener('load', () => {
  const messageContainer = document.createElement('span');
  messageContainer.innerText = loadedMessage;

  paragraph.append(messageContainer);
});
