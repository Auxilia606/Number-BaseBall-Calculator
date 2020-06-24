interface IBaseballDataContext {
    baseballData: Array<string>;
    addBaseballData: (data: string) => void;
    removeBaseballData: (index: number) => void;
    resetBaseballData: () => void;
}