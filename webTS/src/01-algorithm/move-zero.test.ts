/**
 * @description 移动0到数组末尾 test
 */

import { moveZero1, moveZero2 } from "./move-zero";

describe('移动0到数组末尾', ()=>{
    it('正常情况', ()=>{
        const arr = [1, 0, 3, 0, 11, 0];
        moveZero2(arr);
        expect(arr).toEqual([1,3,11,0,0,0])
    })

    it('没有0', ()=>{
        const arr = [1,3,4,11];
        moveZero2(arr);
        expect(arr).toEqual([1,3,4,11])
    })

    it('全是0', ()=>{
        const arr = [0,0,0,0,0];
        moveZero2(arr);
        expect(arr).toEqual([0,0,0,0,0])
    })
})