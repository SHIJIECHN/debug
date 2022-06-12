/**
 * @description 数字千分位格式化 test
 */

import { format1, format2 } from "./thousands-format";

describe('数字千分位格式化', ()=>{
    it('正常情况', ()=>{
        const n = 10200037608;
        const res = format2(n);
        expect(res).toBe('10,200,037,608');
    })

    it('小于 1000', ()=>{
        expect(format2(0)).toBe('0')
        expect(format2(10)).toBe('10')
    })
})