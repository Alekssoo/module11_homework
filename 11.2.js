function primeNumbers(num) {
    if (num >= 2 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return `Число ${num} не является простым!`;
            }
        };
        return `Число ${num} - простое.`;
    } else if (num == 0 || num == 1) {
        return `Число ${num} не является простым!`;
    } else {
        return "Введены неверные данные.";}
}

console.log(primeNumbers(1));
