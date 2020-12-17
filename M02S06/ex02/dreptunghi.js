const validateInput = (arr) => {
  if (arr.length < 4) {
    return 'Nu am primit toti parametrii neccesari';
  }

  if (isNaN(arr[2]) || isNaN(arr[3])) {
    return 'Parametrii primiti nu sunt valabili';
  }

  return true;
};

const validationResult = validateInput(process.argv);

if (validationResult !== true) {
  console.log(validationResult);
  process.exit();
}

// [executabil node, adresa scriptului, lungime, latime]
const [nodePath, scriptPath, width, length] = process.argv;

console.log(`Suprafata dreptunghiului introdus ${width * length}`);
