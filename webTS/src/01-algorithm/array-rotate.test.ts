/**
 * @description Array rotate test
 */

import {rotate1, rotate2} from './array-rotate'

// 单元测试格式：describe 一组测试用例
describe('数组旋转', ()=>{
    // 一个测试用例
    it('正常情况', ()=>{
        const arr = [1,2,3,4,5,6,7];
        const k = 3;

        const res = rotate2(arr, k);
        expect(res).toEqual([5,6,7,1,2,3,4]); // 断言
    })

    it('数组为空', ()=>{
        const res = rotate2([], 3);
        expect(res).toEqual([]); // 断言
    })

    it('k是负值', ()=>{
        const arr = [1,2,3,4,5,6,7];
        const k = -3;

        const res = rotate2(arr, k);
        expect(res).toEqual([5,6,7,1,2,3,4]); // 断言
    })

    it('k是0', ()=>{
        const arr = [1,2,3,4,5,6,7];
        const k = 0;

        const res = rotate2(arr, k);
        expect(res).toEqual(arr); // 断言
    })

    it('k不是数字', ()=>{
        const arr = [1,2,3,4,5,6,7];
        const k = 'abc';

        // @ts-ignore  使用@ts-ignore可以忽略ts检查类型报错
        const res = rotate2(arr, k);
        expect(res).toEqual(arr); // 断言
    })
})

