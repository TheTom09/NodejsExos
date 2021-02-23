function add(numberToAdd) {
    console.lo('value of "numberToAdd": ' + numberToAdd);

    const numbers = numberToAdd.split(',');
    console.log('value of "numbers": ', numbers);

    if (numberToAdd === '') {
        return '0';
    }
    else {
        if (numbers.length > 1) {
            const numberReadyToAdd = [];
            let addResult = 0;
            
            for (let i = 0; i < numbers.length; i = i + 1) {
                numberReadyToAdd.push(parseInt(numbers[i], 10));
            }

            for (let i = 0; i < numberReadyToAdd.length; i = i + 1) {
                addResult = addResult + numberReadyToAdd[i];
            }

            console.log(addResult);
        }
        else {
            return numberToAdd;
        }
    }
}

const result = add('1,2');

console.log('result: ' + result);

