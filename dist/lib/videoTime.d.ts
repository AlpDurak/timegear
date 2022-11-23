declare type ValueType = "s" | "ms";
declare type Options = {
    allowZero?: boolean;
    seperator?: string;
};
export declare const toVideoTime: (value: number, valueType: ValueType, options?: Options) => string;
export {};
