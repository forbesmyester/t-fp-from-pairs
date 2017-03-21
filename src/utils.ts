import assoc from 't-fp-assoc';

export default function fromPairs<T>(pairs: [string, T][]): {[k: string]: T} {
    return pairs.reduce((acc, [k, v]) => {
        return assoc(k, v, acc);
    }, <{[k: string]: T}>{}
    );
}
