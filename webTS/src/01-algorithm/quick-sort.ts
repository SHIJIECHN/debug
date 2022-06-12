/**
 * @description 快速排序
 */


/**
 * 快速排序（使用splice）
 * @param arr number arr
 */
export function quickSort1(arr: number[]): number[] {
    const length = arr.length;
    if(length === 0 )return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.splice(midIndex, 1)[0]; 
    // arr.splice(midIndex, 1)返回的是一个数组, 1是只有一个元素，[0]是取出里面的值

    const left: number[] = [];
    const right: number[] = [];
    // 注意：这里不能用length，而是用arr.length。因为arr已经被splice给修改了
    // O(n) * O(logn) -> O(nlogn)
    for(let i = 0; i < arr.length; i++){
        const n = arr[i];
        // O(logn)
        if(n < midValue){
            // 小于midValue，则放在left
            left.push(n);
        }else{
            // 大于等于midValue，则放在right
            right.push(n);
        }
    }

    return quickSort1(left).concat(
        [midValue], 
        quickSort1(right)
    )
}

/**
 * 快速排序（使用slice）
 * @param arr number arr
 */
export function quickSort2(arr: number[]): number[] {
    const length = arr.length;
    if(length === 0 )return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.slice(midIndex, midIndex+1)[0]; 

    const left: number[] = [];
    const right: number[] = [];

    for(let i = 0; i < length; i++){
        // 因为midIndex没有删除掉还在数组中，所以要屏蔽掉
        if(i !== midIndex){
            const n = arr[i];
            if(n < midValue){
                // 小于midValue，则放在left
                left.push(n);
            }else{
                // 大于等于midValue，则放在right
                right.push(n);
            }
        }
    }

    return quickSort2(left).concat(
        [midValue], 
        quickSort2(right)
    )
}

// // 功能测试
// const arr1 = [9,1,6,8,2,7,3,8,4,9,5];
// console.log(quickSort2(arr1));


// 性能测试
// const arr1 = [];
// for(let i = 0; i < 10 * 10000; i++){
//     arr1.push(Math.floor(Math.random() * 1000));
// }

// console.time('quickSort1');
// quickSort1(arr1);
// console.timeEnd('quickSort1'); // 82ms

// console.time('quickSort2');
// quickSort2(arr1);
// console.timeEnd('quickSort2'); // 108ms


// 单独比较splice和slice

const arr1 = [];
for(let i = 0; i < 10 * 10000; i++){
    arr1.push(Math.floor(Math.random() * 1000));
}
console.time('quickSort1');
arr1.splice(5 * 10000, 1)
console.timeEnd('quickSort1'); // 0.1ms

const arr2 = [];
for(let i = 0; i < 10 * 10000; i++){
    arr2.push(Math.floor(Math.random() * 1000));
}
console.time('quickSort2');
arr2.slice(5*10000, 5*10000 + 1)
console.timeEnd('quickSort2'); // 0.008ms