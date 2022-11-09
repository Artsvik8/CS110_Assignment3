const finalLinesNumber = 8;

let currentLinesNumber = 1,
    symbol = '+';

while (currentLinesNumber <= finalLinesNumber) {
    let charsInLine = 1,
        currentLine = '';

    while (charsInLine <= finalLinesNumber) {
        currentLine += symbol;
        charsInLine++;
    }

    console.log(currentLine);

    currentLinesNumber++;
}