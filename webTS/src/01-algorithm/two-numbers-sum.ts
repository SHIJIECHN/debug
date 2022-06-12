/**
 * @description 两数之和
 */


/**
 * 寻找和为n的两个数（嵌套循环）
 * @param arr arr
 * @param n n
 * @returns 
 */
export function findTwoNumbers1(arr: number[], n: number): number[]{
    const res: number[] = [];

    const length  = arr.length;
    if(length == 0) return res;


    // O(n^2)
    for(let i =0; i < length; i++){
        const n1 = arr[i];
        let flag = false; // 是否得到结果

        for(let j = i+1; j< length; j++){
            const n2 = arr[j];

            if(n1 + n2 === n){
                res.push(n1);
                res.push(n2);
                flag = true;
                break;
            }
        }

        if(flag) break;
    }

    return res;
}

/**
 * 查找和为n的两个数（双指针）
 * @param arr arr
 * @param n n
 */
export function findTwoNumbers2(arr: number[], n: number): number[]{
    const res:number[] = [];

    const length = arr.length;
    if(length === 0) return res;

    let i = 0; // 头
    let j = length -1; // 尾

    while(i < j){
        const n1 = arr[i];
        const n2 = arr[j];

        const sum = n1 + n2;

        if( sum > n){
            // sum大于n， 则j要向前移动
            j--;
        }else if(sum < n){
            // sum小于n，则i要向后移动
            i++
        }else {
            // 相等
            res.push(n1);
            res.push(n2);
            break;
        }
    }


    return res;
}

// 功能测试
const arr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,4,7,11,15];
// console.info(findTwoNumbers2(arr, 15))

// 性能测试
console.time('findTwoNumber1');
for(let i =0; i < 100*10000; i++){
    findTwoNumbers1(arr, 15)
}
console.timeEnd('findTwoNumber1'); // 690ms

console.time('findTwoNumber2');
for(let i =0; i < 100*10000; i++){
    findTwoNumbers2(arr, 15)
}
console.timeEnd('findTwoNumber2'); // 90ms