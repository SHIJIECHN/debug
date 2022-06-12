/**
 * @description 回文数字 
 */

/**
 * 查询1-max的所有对称数（数组反转）
 * @param max 最大值
 * @returns 
 */
export function findPalindromeNumber1(max: number): number[]{
    const res: number[] =[]
    if(max <= 0) return res;

    // 1 - 10000
    for(let i = 1; i <= max; i++){
        // 转换为字符串，转换为数组，再反转，比较
        const  s = i.toString();
        if(s === s.split('').reverse().join('')){
            res.push(i);
        }
    }

    return res;
}

/**
 * 查询1-max的所有对称数（字符串前后比较）
 * @param max 最大值
 * @returns 
 */
 export function findPalindromeNumber2(max: number): number[]{
    const res: number[] =[]
    if(max <= 0) return res;

    // 1 - 10000
    for(let i = 1; i <= max; i++){
        
        const  s = i.toString();
        const length = s.length;

        // 字符串比较
        let flag = true,
            startIndex = 0,
            endIndex = length - 1;
        
        while(startIndex < endIndex){
            if(s[startIndex] !== s[endIndex]){
                flag = false;
                break;
            }else {
                // 继续比较
                startIndex++;
                endIndex--;
            }
        }
        if(flag) res.push(i);
    }

    return res;
}

/**
 * 查询1-max的所有对称数（生成翻转数）
 * @param max 最大值
 * @returns 
 */
 export function findPalindromeNumber3(max: number): number[]{
    const res: number[] =[]
    if(max <= 0) return res;

    for(let i = 1; i <= max; i++){
        let n = i;
        let rev = 0; // 存储翻转数

        while(n > 0){
            rev = rev * 10 + n % 10;
            n = Math.floor(n / 10);
        }

        if(i === rev) res.push(i);
    }

    return res;
}

// 功能测试
// console.log(findPalindromeNumber3(200));

// 性能测试
console.time('findPalindromeNumber1');
findPalindromeNumber1(100*10000);
console.timeEnd('findPalindromeNumber1'); // 402ms

console.time('findPalindromeNumber2');
findPalindromeNumber2(100*10000);
console.timeEnd('findPalindromeNumber2'); // 55ms

console.time('findPalindromeNumber3');
findPalindromeNumber3(100*10000);
console.timeEnd('findPalindromeNumber3'); // 41ms
