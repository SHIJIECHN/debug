/**
 * @description Array rotate
 */

/**
 * 旋转数组 k 步-使用pop和unshift方法
 * @param arr arr
 * @param k k
 */
export function rotate1(arr: number[], k: number): number[]{
    const length = arr.length;
    if(!k || length == 0) return arr; 
    const step = Math.abs(k % length); 

    // 时间复杂度O(n^2)。为什么时间复杂度是O(n^2)呢？因为unshift操作。
    // 空间复杂度O(1)
    for(let i = 0; i < step; i++){
        const n = arr.pop(); 

        if(n != null){
            arr.unshift(n); 
            // 数组是一个有序结构，unshift会非常慢！！！O(n)
            // 数组是一个连续的内存结构，数组的push是很快。
            // 数组的unshift、shift、splice都是很慢的，要慎重使用
            // 外层已经有一个循环，里面unshift又是n，所以时间复杂度是O(n)
        }
    }

    return arr;
}


/**
 * 旋转数组k步- 使用concat方法
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function  rotate2(arr: number[], k: number): number[]{
    const length  = arr.length;
    if(!k || length === 0) return arr;

    // 时间复杂度O(1)
    // 空间复杂度O(n)
    const step = Math.abs(k % length);
    const part1 = arr.slice(-step); // slice不会动原数组，只是做了拷贝
    const part2 = arr.slice(0, length - step); 

    const part3 = part1.concat(part2); // 拼接
    return part3;
}


// 性能测试
const arr1 = [];
for(let i = 0; i < 10 * 10000; i++){
    arr1.push(i);
}

console.time('rotate1');
rotate1(arr1, 9* 10000)
console.timeEnd('rotate1');
// rotate1: 1233 ms O(n^2)


const arr2 = [];
for(let i = 0; i < 10 * 10000; i++){
    arr2.push(i);
}

console.time('rotate2');
rotate2(arr2, 9* 10000);
console.timeEnd('rotate2');
// rotate2: 1 ms O(1)

