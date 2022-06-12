/**
 * @description 千分位格式化
 */


/**
 * 千分位格式化（使用数组）
 * @param n number
 */
 export function format1(n: number): string{
    n = Math.floor(n); // 只考虑整数

    const s = n.toString();
    const arr = s.split('').reverse();
    return arr.reduce((prev, val, index)=>{
        if(index % 3 === 0){
            if(prev){
                return val + ',' + prev;
            }else{
                return val;
            }
        }else{
            return val + prev;
        }
    }, '');
}

/**
 * 数字千分位格式化（字符串）
 * @param n number
 */
export function format2(n: number): string{
    n = Math.floor(n); // 只考虑整数

    let res = '';
    const s = n.toString();
    const length = s.length;

    for(let i = length -1; i >=0; i--){
        const j = length - i;
        if(j % 3 === 0){
            if(i === 0){ // 最前面的一个，不用加逗号
                res = s[i] + res;
            }else{
                res = ',' + s[i] + res;
            }

        }else{
            res = s[i] + res;
        }
    }

    return res;
}


// 功能测试
const n = 10200037608;
console.log(format1(n));
console.log(format2(n));