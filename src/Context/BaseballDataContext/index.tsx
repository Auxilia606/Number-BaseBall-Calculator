import React, { createContext, useState } from 'react';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const BaseballDataContext = createContext<IBaseballDataContext>({
    baseballData: [],
    addBaseballData: (data: string): void => { },
    removeBaseballData: (index: number): void => { },
    resetBaseballData: (): void => { }
});

const BaseballDataProvider = ({ children }: Props) => {
    const [baseballData, setBaseballData] = useState<Array<string>>([]);
    const addBaseballData = (data: string): void => {
        const baseballDataList = [...baseballData, data];
        setBaseballData(baseballDataList);
    };

    const removeBaseballData = (index: number): void => {
        let list = [...baseballData];
        list.splice(index, 1);
        setBaseballData(list);
    }

    const resetBaseballData = (): void => {
        setBaseballData([]);
    };

    return (
        <BaseballDataContext.Provider
            value={{
                baseballData,
                addBaseballData,
                removeBaseballData,
                resetBaseballData
            }}>
            {children}
        </BaseballDataContext.Provider>
    );
};

export { BaseballDataProvider, BaseballDataContext };
