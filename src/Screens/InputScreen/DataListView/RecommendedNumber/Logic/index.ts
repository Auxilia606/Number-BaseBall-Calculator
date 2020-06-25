export const initBaseballNumbers = () => {
    let arr = [];
    for (let i0 = 0; i0 < 10; i0++) {
        for (let i1 = 0; i1 < 10; i1++) {
            if (i1 !== i0) {
                for (let i2 = 0; i2 < 10; i2++) {
                    if (i2 !== i1 && i2 !== i0) {
                        for (let i3 = 0; i3 < 10; i3++) {
                            if (i3 !== i2 && i3 !== i1 && i3 !== i0) {
                                arr.push([i0, i1, i2, i3, false]);
                            }
                        }
                    }
                }
            }
        }
    }
    return arr;
};

export const changeTypes = (arr: Array<string>) => {
    let newArr = arr.map((value) => {
        let newItem = [];
        let number = Number(value.split(' ')[0]);
        let counter = value.split(' ')[1];
        for (let i = 0; i < 4; i++) {
            newItem[3 - i] = number % 10;
            number = (number - newItem[3 - i]) / 10;
        }
        if (counter === 'Out' || counter === 'out') {
            newItem[4] = 'OUT';
        } else {
            newItem[4] = counter;
        }
        return newItem;
    });
    return newArr as Array<Array<number | string>>;
};

export const checkData = (numberSet: Array<Array<number | boolean>>, dataSet: Array<Array<number | string>>) => {
    let newNumberSet = [...numberSet];
    for (let j = 0; j < newNumberSet.length; j++) {
        let result = true;
        for (let i = 0; i < dataSet.length; i++) {
            if (!compareData(newNumberSet[j], dataSet[i])) {
                result = false;
            }
        }
        newNumberSet[j][4] = result;
    }
    return newNumberSet;
};

const compareData = (numbers: Array<number | boolean>, datas: Array<number | string>) => {
    let countS = 0;
    let countB = 0;
    let counter = '';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (numbers[i] === datas[j] && i===j) {
                countS++;
            } else if (numbers[i] === datas[j]) {
                countB++;
            }
        }
    }
    if (countS === 0 && countB === 0) {
        counter = 'OUT';
    } else if (countS === 0) {
        counter = `${countB}B`;
    } else if (countB === 0) {
        counter = `${countS}S`;
    } else {
        counter = `${countS}S${countB}B`;
    }
    if (counter === datas[4]) {
        return true;
    } else {
        return false;
    }
};

export const pickRandomNumber = (numberSet: Array<Array<number | boolean>>) => {
    let count = 0;
    let numbers = [];
    for (let i=0;i<numberSet.length;i++){
        if (numberSet[4]) {
            
        }
    }

};
