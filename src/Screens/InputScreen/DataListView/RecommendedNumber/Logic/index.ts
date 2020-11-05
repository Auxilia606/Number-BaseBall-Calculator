export const initBaseballNumbers = (num: number) => {
    let arr = [];
    if (num === 3) {
        for (let i0 = 0; i0 < 10; i0++) {
            for (let i1 = 0; i1 < 10; i1++) {
                if (i1 !== i0) {
                    for (let i2 = 0; i2 < 10; i2++) {
                        if (i2 !== i1 && i2 !== i0) {
                            let item: [number, number, number, boolean];
                            item = [i0, i1, i2, false];
                            arr.push(item);
                        }
                    }
                }
            }
        }
    } else if (num === 4) {
        for (let i0 = 0; i0 < 10; i0++) {
            for (let i1 = 0; i1 < 10; i1++) {
                if (i1 !== i0) {
                    for (let i2 = 0; i2 < 10; i2++) {
                        if (i2 !== i1 && i2 !== i0) {
                            for (let i3 = 0; i3 < 10; i3++) {
                                if (i3 !== i2 && i3 !== i1 && i3 !== i0) {
                                    let item: [
                                        number,
                                        number,
                                        number,
                                        number,
                                        boolean
                                    ];
                                    item = [i0, i1, i2, i3, false];
                                    arr.push(item);
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (num === 5) {
        for (let i0 = 0; i0 < 10; i0++) {
            for (let i1 = 0; i1 < 10; i1++) {
                if (i1 !== i0) {
                    for (let i2 = 0; i2 < 10; i2++) {
                        if (i2 !== i1 && i2 !== i0) {
                            for (let i3 = 0; i3 < 10; i3++) {
                                if (i3 !== i2 && i3 !== i1 && i3 !== i0) {
                                    for (let i4 = 0; i4 < 10; i4++) {
                                        if (
                                            i4 !== i3 &&
                                            i4 !== i2 &&
                                            i4 !== i1 &&
                                            i4 !== i0
                                        ) {
                                            let item: [
                                                number,
                                                number,
                                                number,
                                                number,
                                                number,
                                                boolean
                                            ];
                                            item = [i0, i1, i2, i3, i4, false];
                                            arr.push(item);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return arr;
};

export const changeTypes = (arr: Array<string>, baseballNumberCounter: number) => {
    let newArr;
    if (baseballNumberCounter === 3) {
        newArr = arr.map((value) => {
            let newItem = [];
            let number = Number(value.split(' ')[0]);
            let counter = value.split(' ')[1];
            for (let i = 0; i < 3; i++) {
                newItem[2 - i] = number % 10;
                number = (number - newItem[2 - i]) / 10;
            }
            newItem[3] = counter.toUpperCase();
            return newItem;
        });
    } else if (baseballNumberCounter === 4) {
        newArr = arr.map((value) => {
            let newItem = [];
            let number = Number(value.split(' ')[0]);
            let counter = value.split(' ')[1];
            for (let i = 0; i < 4; i++) {
                newItem[3 - i] = number % 10;
                number = (number - newItem[3 - i]) / 10;
            }
            newItem[4] = counter.toUpperCase();
            return newItem;
        });
    } else if (baseballNumberCounter === 5) {
        newArr = arr.map((value) => {
            let newItem = [];
            let number = Number(value.split(' ')[0]);
            let counter = value.split(' ')[1];
            for (let i = 0; i < 5; i++) {
                newItem[4 - i] = number % 10;
                number = (number - newItem[4 - i]) / 10;
            }
            newItem[5] = counter.toUpperCase();
            return newItem;
        });
    }
    return newArr as Array<Array<number | string>>;
};

export const checkData = (
           numberSet: Array<
               | [number, number, number, boolean]
               | [number, number, number, number, boolean]
               | [number, number, number, number, number, boolean]
           >,
           dataSet: Array<Array<number | string>>,
           baseballNumberCounter: number
       ) => {
           let newNumberSet = [...numberSet];
           for (let j = 0; j < newNumberSet.length; j++) {
               let result = true;
               for (let i = 0; i < dataSet.length; i++) {
                   if (!compareData(newNumberSet[j], dataSet[i], baseballNumberCounter)) {
                       result = false;
                   }
               }
               newNumberSet[j][numberSet[0].length - 1] = result;
           }
           return newNumberSet;
       };

const compareData = (
    numbers:
        | [number, number, number, boolean]
        | [number, number, number, number, boolean]
        | [number, number, number, number, number, boolean],

    datas: Array<number | string>,
    baseballNumberCounter: number
) => {
    let countS = 0;
    let countB = 0;
    let counter = '';
    for (let i = 0; i < baseballNumberCounter; i++) {
        for (let j = 0; j < baseballNumberCounter; j++) {
            if (numbers[i] === datas[j] && i === j) {
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
    if (counter === datas[numbers.length - 1]) {
        return true;
    } else {
        return false;
    }
};

export const pickRandomNumber = (
    numberSet: Array<
        | [number, number, number, boolean]
        | [number, number, number, number, boolean]
        | [number, number, number, number, number, boolean]
    >
) => {
    const numberSetLength = numberSet[0].length;
    let numbers = [];
    let rand = Math.random();
    if (numberSetLength === 4) {
        for (let i = 0; i < numberSet.length; i++) {
            if (numberSet[i][3]) {
                let pickedNumber =
                    numberSet[i][0] * 100 +
                    numberSet[i][1] * 10 +
                    numberSet[i][2];
                if (pickedNumber < 100) {
                    numbers.push(`0${pickedNumber}`);
                } else {
                    numbers.push(`${pickedNumber}`);
                }
            }
        }
    } else if (numberSetLength === 5) {
        for (let i = 0; i < numberSet.length; i++) {
            if (numberSet[i][4]) {
                let pickedNumber =
                    numberSet[i][0] * 1000 +
                    numberSet[i][1] * 100 +
                    numberSet[i][2] * 10 +
                    (numberSet[i][3] as number);
                if (pickedNumber < 1000) {
                    numbers.push(`0${pickedNumber}`);
                } else {
                    numbers.push(`${pickedNumber}`);
                }
            }
        }
    } else if (numberSetLength === 6) {
        for (let i = 0; i < numberSet.length; i++) {
            if (numberSet[i][5]) {
                let pickedNumber =
                    numberSet[i][0] * 10000 +
                    numberSet[i][1] * 1000 +
                    numberSet[i][2] * 100 +
                    (numberSet[i][3] as number) * 10 +
                    (numberSet[i][4] as number);
                if (pickedNumber < 10000) {
                    numbers.push(`0${pickedNumber}`);
                } else {
                    numbers.push(`${pickedNumber}`);
                }
            }
        }
    }
    if (numbers.length === 0) {
        return 'Error!';
    } else {
        return numbers[Math.floor(numbers.length * rand)];
    }
};
