let paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');

  if (!logContainer || logContainer === null) {
    logContainer = document.createElement('div');
    document.body.appendChild(logContainer);
  }

  messageParagraph.innerText = message;

  logContainer.appendChild(messageParagraph);
};

let pixelApp = pixelApp || {};
pixelApp.domLog = paragraphLog;

// console.log = paragraphLog;
console.domLog = paragraphLog;
