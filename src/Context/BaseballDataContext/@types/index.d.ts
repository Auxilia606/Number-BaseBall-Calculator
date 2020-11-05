interface IBaseballDataContext {
    baseballData: Array<string>;
    recommendedNumber: number | string;
    baseballNumberCounter: number;
    setBaseballNumberCounter: (counter: number) => void;
    addBaseballData: (data: string) => void;
    removeBaseballData: (index: number) => void;
    resetBaseballData: () => void;
    showNumber: (number: number | string) => void;
}