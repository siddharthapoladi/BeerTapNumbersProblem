function getNumbers(n) {
    let numbers = [], sum = 0;

    for (let x = 1; x <= n; x++) {
        let r = getDivisors(x);
        sum = r.reduce((a, b) => a + b, 0);
        if (sum > x) {
            r.sort((a, b) => b - a);
            if (!isSubsetSum(r, r.length, x)) {
                numbers.push(x);
            }
        }
    }
    return numbers;
}

function getDivisors(n) {
    let divisors = [];

    for (let x = 1; x < n; x++) {
        if (n % x === 0)
            divisors.push(x);
    }
    return divisors;
}

function isSubsetSum(set, n, sum) {
    if (sum === 0)
        return true;
    if (n === 0)
        return false;
    if (set[n - 1] > sum)
        return isSubsetSum(set, n - 1, sum);
    return isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1]);
}

var remainingNumbers = getNumbers(1000);
console.log(remainingNumbers);