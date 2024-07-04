document.getElementById('en').addEventListener('click', encryptText);
document.getElementById('des').addEventListener('click', decryptText);
document.getElementById('copy').addEventListener('click', copyToClipboard);

function encryptText() {
    const inputText = document.getElementById('textUser').value;
    if (isValidInput(inputText)) {
        let encryptedText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        displayResult(encryptedText);
    } else {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
    }
}

function decryptText() {
    const inputText = document.getElementById('textUser').value;
    if (isValidInput(inputText)) {
        let decryptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
        displayResult(decryptedText);
    } else {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
    }
}

function isValidInput(input) {
    return /^[a-z\s]+$/.test(input);
}

function displayResult(text) {
    document.getElementById('default').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('answer').value = text;
}

function copyToClipboard() {
    const resultText = document.getElementById('answer');
    resultText.select();
    resultText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
