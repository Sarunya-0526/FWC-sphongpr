const leftInput = document.getElementById('leftNum');
const operatorSelect = document.getElementById('operator');
const rightInput = document.getElementById('rightNum');
const submitBtn = document.getElementById('submitBtn');

function isValidNumber(val) {
    const num = Number(val);
    return val.trim() !== '' && !isNaN(num) && num >= 0 && num % 1 === 0;
}

submitBtn.addEventListener('click', function() {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;

    if (!isValidNumber(leftVal) || !isValidNumber(rightVal)) {
        alert('Error :(');
        return;
    }

    const left = Number(leftVal);
    const right = Number(rightVal);
    const op = operatorSelect.value;

    if ((op === '/' || op === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    if (op === '+') result = left + right;
    else if (op === '-') result = left - right;
    else if (op === '*') result = left * right;
    else if (op === '/') result = left / right;
    else if (op === '%') result = left % right;

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert('Please, use me...');
}, 30000);