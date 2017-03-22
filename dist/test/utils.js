"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can fromPairs', (tt) => {
    let input = [['a', false], ['b', 'bob']];
    let result = utils_1.default(input);
    tt.deepEqual(result, { a: false, b: 'bob' });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFxQztBQUVyQyxhQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRTtJQUVyQixJQUFJLEtBQUssR0FBK0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLElBQUksTUFBTSxHQUFHLGVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7QUFFL0MsQ0FBQyxDQUFDLENBQUMifQ==