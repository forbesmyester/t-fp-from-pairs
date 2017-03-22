import test from 'ava';
import fromPairs from '../src/utils';

test('can fromPairs', (tt) => {

    let input: [string, boolean|string][] = [['a', false], ['b', 'bob']];
    let result = fromPairs(input);
    tt.deepEqual(result, {a: false, b: 'bob'});

});
