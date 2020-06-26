import React, { createContext, useState } from 'react';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const BaseballDataContext = createContext<IBaseballDataContext>({
    baseballData: [],
    recommendedNumber: '----',
    addBaseballData: (data: string): void => { },
    removeBaseballData: (index: number): void => { },
    resetBaseballData: (): void => { },
    showNumber: (number: number | string): void => { }
});

const checkBaseballNumber = (number: number) => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr[i] = number % 10;
        number = (number - arr[i]) / 10;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 4; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
};

const checkBaseballCounter = (counter: string) => {
    if (counter === 'OUT' || counter === '1B' || counter === '2B'
        || counter === '3B' || counter === '4B' || counter === '1S' || counter === '1S1B' || counter === '1S2B'
        || counter === '1S3B' || counter === '2S' || counter === '2S1B' || counter === '2S2B' || counter === '3S') {
        return true;
    } else {
        return false;
    }
}

const BaseballDataProvider = ({ children }: Props) => {
    const [baseballData, setBaseballData] = useState<Array<string>>([]);
    const [recommendedNumber, setRecommendedNumber] = useState<number | string>('----');
    const addBaseballData = (data: string): void => {
        const baseballNumber = Number(data.split(' ')[0]);
        const baseballCounter = data.split(' ')[1].toUpperCase();
        if (checkBaseballCounter(baseballCounter) && checkBaseballNumber(baseballNumber)) {
            setBaseballData([...baseballData, data]);
        }
    };

    const removeBaseballData = (index: number): void => {
        let list = [...baseballData];
        list.splice(index, 1);
        setBaseballData(list);
    }

    const resetBaseballData = (): void => {
        setBaseballData([]);
    };

    const showNumber = (number: number | string): void => {
        setRecommendedNumber(number);
    }

    return (
        <BaseballDataContext.Provider
            value={{
                baseballData,
                addBaseballData,
                removeBaseballData,
                resetBaseballData,
                recommendedNumber,
                showNumber
            }}>
            {children}
        </BaseballDataContext.Provider>
    );
};

export { BaseballDataProvider, BaseballDataContext };
