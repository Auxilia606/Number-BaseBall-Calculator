interface IBaseballDataContext {
    baseballData: Array<string>;
    addBaseballData: (data: string) => void;
    resetBaseballData: () => void;
}