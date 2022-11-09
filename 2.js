let numericalGrade = 87,
    letterGrade = '',
    symbol = '',
    failing = false;

if (numericalGrade < 60) {
    letterGrade = 'F';
} else if (numericalGrade >= 60 && numericalGrade < 70) {
    letterGrade = 'D';
} else if (numericalGrade >= 70 && numericalGrade < 80) {
    letterGrade = 'C';
} else if (numericalGrade >= 80 && numericalGrade < 90) {
    letterGrade = 'B';
} else if (numericalGrade >= 90 && numericalGrade <= 100) {
    letterGrade = 'A';
}

// We check the last digit in order to optimize code
let lastDigit = numericalGrade % 10;

if (letterGrade != 'F') {
    if (numericalGrade == 100 || lastDigit >= 7) {
        symbol = '+';
    } else if (lastDigit <= 3) {
        symbol = '-';
    }
}

switch (letterGrade) {
    // The variable failing is default set to false, so we only need to check if numericalGrade is failing
    case 'D':
        failing = true;
        break;
    case 'F':
        failing = true;
        break;
}

console.log(`Your grade is ${numericalGrade} which corresponds to ${letterGrade}${symbol}. You ${failing ? 'failed!' : 'passed!'}`)