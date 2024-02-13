function bmiCalculator(weight, height) {
    var calcHeight = Math.pow(height, 2);
    var calcBMI = Math.round(weight / calcHeight);
    return calcBMI;
}

bmiCalculator(67, 1.8);
