/**
 * @description 回文数字 test
 */

import { findPalindromeNumber1, findPalindromeNumber2, findPalindromeNumber3 } from "./palindrome-number"

describe('回文数字', ()=>{
    it('正常情况',()=>{
        const res = findPalindromeNumber3(200);
        expect(res.length).toBe(28);
    })

    it('max 小于等于0',()=>{
        const res = findPalindromeNumber3(-1);
        expect(res).toEqual([]);
    })
})