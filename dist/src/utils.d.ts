export default function fromPairs<T>(pairs: [string, T][]): {
    [k: string]: T;
};
