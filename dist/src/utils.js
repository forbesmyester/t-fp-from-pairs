"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t_fp_assoc_1 = require("t-fp-assoc");
function fromPairs(pairs) {
    return pairs.reduce((acc, [k, v]) => {
        return t_fp_assoc_1.default(k, v, acc);
    }, {});
}
exports.default = fromPairs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0I7QUFFL0IsbUJBQXFDLEtBQW9CO0lBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsb0JBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBb0IsRUFBRSxDQUN0QixDQUFDO0FBQ04sQ0FBQztBQUxELDRCQUtDIn0=