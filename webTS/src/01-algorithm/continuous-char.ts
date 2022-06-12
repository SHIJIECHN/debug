/**
 * @description 连续字符
 */

interface IRes{
    char: string,
    length: number
}

/**
 * 求连续最多的字符和次数（嵌套循环）
 * @param str str
 */
export function findContinuousChar1(str: string): IRes{
    // 初始化
    const res: IRes = {
        char: '',
        length: 0
    }

    const length = str.length;
    if(length === 0) return res;

    let templength = 0; // 临时记录当前的连续字符的长度

    // O(n)
    for(let i = 0; i < length; i++){
        templength = 0; // 重置

        for(let j = i; j < length; j++){
            // 1. 相等
            if(str[i] === str[j]){
                templength++;
            }

            // 2. 不相等了或者已经到了最后一个。要去判断最大值
            if(str[i] != str[j] || j === length - 1){
                if(templength > res.length){
                    res.char = str[i];
                    res.length = templength;
                }

                // j 没有到末尾
                if(j < length - 1){
                    i = j - 1; // 跳步
                    // 为什么是i = j - 1, 而不是i = j呢？
                    // 因为在外层for循环中还会执行i++
                }
    
                break;

            }
           
        }
    }
    return res;
}

/**
 * 求连续最多的字符和次数（双指针）
 * @param str str
 */
export function findContinuousChar2(str: string): IRes{
    // 初始化
    const res: IRes = {
        char: '',
        length: 0
    }

    const length = str.length;
    if(length === 0) return res;

    let templength = 0; // 临时记录当前的连续字符的长度

    let i = 0,
        j = 0;

    // O(n)
    for(; i < length; i++){
        // 相等
        if(str[i] === str[j]){
            templength++
        }

        // 不相等或者i到末尾
        if(str[i] !== str[j] || i === length - 1){
            if(templength > res.length){
                res.char = str[j];
                res.length = templength;
            }

            templength = 0; // 重置

            // i 没有到末尾
            if(i < length - 1){
                j = i; // 让j追上i
                i--; // 细节，因为for有i++
            }
            
        }
    }

    return res;
}

// // 功能测试
// const  str = 'aabbcccddeeee11223';
// console.log(findContinuousChar2(str));

let str = '';
for(let i = 0; i < 100 * 10000; i++){
    str += i.toString();
}

console.time('finfContinousChar1');
findContinuousChar1(str); 
console.timeEnd('finfContinousChar1'); // 277ms


console.time('finfContinousChar2');
findContinuousChar2(str); 
console.timeEnd('finfContinousChar2'); // 259ms