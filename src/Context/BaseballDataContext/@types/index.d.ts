interface IBaseballDataContext {
    baseballData: Array<string>;
    recommendedNumber: number | string;
    addBaseballData: (data: string) => void;
    removeBaseballData: (index: number) => void;
    resetBaseballData: () => void;
    showNumber: (number: number | string) => void;
}