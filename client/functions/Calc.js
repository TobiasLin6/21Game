export function Calc(expr) {
    const ops = ['+', '-', '*', '/'];

    // Remove whitespace
    expr = expr.replace(/\s/g, "");

    // Remove last symbol
    if (ops.includes(expr.slice(-1))) {
        expr = expr.slice(0, -1);
    }

    // Handle multiplication before open parenthesis
    expr = expr.replace(/(\d+)\(/g, "$1*(");

    // Handle multiplication after closed parenthesis
    expr = expr.replace(/\)(\d+)/g, ")*$1");

    // Handle parenthesis
    while (expr.includes("(")) {
        let openIndex = expr.lastIndexOf("(");
        let closeIndex = expr.indexOf(")", openIndex);
        let subExpr = expr.slice(openIndex + 1, closeIndex);
        let result = Calc(subExpr);
        expr = expr.slice(0, openIndex) + result + expr.slice(closeIndex + 1);
    }

    // Handle multiplication and division
    while (expr.includes("*") || expr.includes("/")) {
        let mulIndex = expr.indexOf("*");
        let divIndex = expr.indexOf("/");
        let opIndex = Math.min(mulIndex === -1 ? Infinity : mulIndex, divIndex === -1 ? Infinity : divIndex);

        let leftEnd = opIndex - 1;
        while (leftEnd >= 0 && !ops.includes(expr[leftEnd])) {
            leftEnd--;
        }

        let rightEnd = opIndex + 1;
        while (rightEnd < expr.length && !ops.includes(expr[rightEnd])) {
            rightEnd++;
        }

        let left = parseFloat(expr.slice(leftEnd + 1, opIndex));
        let right = parseFloat(expr.slice(opIndex + 1, rightEnd));
        let result = expr[opIndex] === "*" ? left * right : left / right;

        expr = expr.slice(0, leftEnd + 1) + result.toString() + expr.slice(rightEnd);
    }

    // Handle addition and subtraction
    while (expr.includes("+") || expr.includes("-")) {
        let addIndex = expr.indexOf("+");
        let subIndex = expr.indexOf("-");
        let opIndex = Math.min(addIndex === -1 ? Infinity : addIndex, subIndex === -1 ? Infinity : subIndex);

        let leftEnd = opIndex - 1;
        while (leftEnd >= 0 && !ops.includes(expr[leftEnd])) {
            leftEnd--;
        }

        let rightEnd = opIndex + 1;
        while (rightEnd < expr.length && !ops.includes(expr[rightEnd])) {
            rightEnd++;
        }

        let left = parseFloat(expr.slice(leftEnd + 1, opIndex));
        let right = parseFloat(expr.slice(opIndex + 1, rightEnd));
        let result = expr[opIndex] === "+" ? left + right : left - right;

        expr = expr.slice(0, leftEnd + 1) + result.toString() + expr.slice(rightEnd);
    }

    let result = parseFloat(expr);
    if (isNaN(result)) {
        return 0;
    }
    return result;
}