$(document).ready(function() {
    function isValidNumber(val) {
        const num = Number(val);
        return val.trim() !== '' && !isNaN(num) && num >= 0 && num % 1 === 0;
    }

    $('#submitBtn').click(function() {
        const leftVal = $('#leftNum').val();
        const rightVal = $('#rightNum').val();

        if (!isValidNumber(leftVal) || !isValidNumber(rightVal)) {
            alert('Error :(');
            return;
        }

        const left = Number(leftVal);
        const right = Number(rightVal);
        const op = $('#operator').val();

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
});