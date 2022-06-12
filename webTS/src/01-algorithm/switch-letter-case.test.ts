/**
 * @description 转换字母大小写
 */

import { switchLetterCase1, switchLetterCase2 } from "./switch-letter-case";

describe('转换字母大小写', ()=>{
    it('正常', ()=>{
        const s = '100aBcD$xYz&';
        const res = switchLetterCase2(s);
        expect(res).toBe('100AbCd$XyZ&');
    })

    it('空字符串', ()=>{
        const res = switchLetterCase2('');
        expect(res).toBe('');
    })

    it('非字母',()=>{
        const s = '100*&^你好';
        const res = switchLetterCase2(s);
        expect(res).toBe('100*&^你好')
    })
})