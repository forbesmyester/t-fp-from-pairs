import test from 'ava';
import fromPairs from '../src/utils';

test('can fromPairs', (tt) => {

    let a: {[k: string]: boolean|string} = {a: false, b: 'bob'};

    tt.deepEqual(fromPairs(a), [['a', false], ['b', 'bob']]);

});
