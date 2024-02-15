const solution = (num1, num2) => {
    const divisionResult = num1 / num2;
    const multiplicationResult = divisionResult * 1000;
    const decimalPart = multiplicationResult % 1;
    const integerPart = multiplicationResult - decimalPart;
    const positiveIntegerPart = integerPart < 0 ? 0 : integerPart;
    return positiveIntegerPart;
};