let number = 365,
    remainders = '';

while (number >= 1) {
    remainders = number % 2 + remainders;

    number = Math.floor(number / 2);
}

console.log(remainders);