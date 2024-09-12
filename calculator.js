function calculateResult() {
    const input = document.calc.txt.value;
    const result = evalFraction(input);
    document.calc.txt.value = result;
}

function evalFraction(expression) {
    // Thay thế phân số bằng phép chia
    const regex = /(\d+)\/(\d+)/g;
    const replacedExpression = expression.replace(regex, (match, p1, p2) => {
        return p1 / p2;
    });
    // Tính toán biểu thức, bao gồm cả π
    return eval(replacedExpression.replace(/π/g, '3.14'));
    
}
