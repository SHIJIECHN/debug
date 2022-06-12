/**
 * @description 括号匹配
 */

import { matchBracket } from "./match-bracket";

describe('括号匹配', ()=>{
    it('正常情况', ()=>{
        const str = '{a(b[c]d)e}f';
        const res = matchBracket(str);
        // 不是数组或字符串时，用toBe
        expect(res).toBe(true);
    })

    it('括号不匹配', ()=>{
        const str = '{a(b[(c]d)e}f';
        const res = matchBracket(str);
        expect(res).toBe(false);
    })

    it('括号顺序不一致', ()=>{
        const str = '{a(b[c)d]e}f';
        const res = matchBracket(str);
        expect(res).toBe(false);
    })

    it('空字符串', ()=>{
        const res = matchBracket('');
        expect(res).toBe(true);
    })
})