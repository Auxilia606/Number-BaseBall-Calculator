import React, { createContext, useState } from 'react';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const BaseballDataContext = createContext<IBaseballDataContext>({
    baseballData: [],
    addBaseballData: (data: string): void => { },
    resetBaseballData: (): void => { }
});

const BaseballDataProvider = ({ children }: Props) => {
    const [baseballData, setBaseballData] = useState<Array<string>>([]);
    const addBaseballData = (data: string): void => {
        const baseballDataList = [...baseballData, data];
        setBaseballData(baseballDataList);
    };

    const resetBaseballData = (): void => {
        setBaseballData([]);
    };

    return (
        <BaseballDataContext.Provider
            value={{
                baseballData,
                addBaseballData,
                resetBaseballData
            }}>
            {children}
        </BaseballDataContext.Provider>
    );
};

export { BaseballDataProvider, BaseballDataContext };
