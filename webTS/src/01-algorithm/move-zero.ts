/**
 * @description 移动0到数组末尾
 */

/**
 * 移动0到数组的末尾（嵌套循环）
 * @param arr number arr
 */
function moveZero(arr: number[]): void{
    const length = arr.length;
    if(length == 0) return;

    for(let i = 0; i < length; i++){
        if(arr[i] == 0){
            arr.splice(i,1);
            arr.push(0);
        }
    }
    console.log(arr);
    
}

/**
 * 移动0到数组的末尾（嵌套循环优化）
 * @param arr number arr
 */
export function moveZero1(arr: number[]): void{
    const length = arr.length;
    if(length == 0) return;

    let zeroLength = 0;
    // i 范围 length-zeroLength
    for(let i = 0; i < length-zeroLength; i++){
        if(arr[i] === 0){
            arr.splice(i,1); // 本身就有O(n)
            arr.push(0);
            i--; // 数组截取了一个元素， i要递减，否则连续0就会有错误
            zeroLength++; // 累加0的长度
        }
    }
}


/**
 * 移动0到数组的末尾（双指针）
 * @param arr number arr
 */
export function moveZero2(arr: number[]):void {
    const length = arr.length;
    if(length == 0) return;

    let i;
    let j = -1;  // 指向第一个0

    for(i = 0; i < length; i++){
        if(arr[i] === 0){
            // 第一个0
            if(j < 0){
                j = i;
            }
        }

        // j已经指向第一个0
        if(arr[i] !== 0 && j >=0){
            const n = arr[i];
            arr[i] = arr[j];
            arr[j] = n;
            j++;
        }
    }
    
}

// 功能测试
// const arr = [1, 0, 3, 0, 11, 0];
// moveZero2(arr);
// console.log(arr);

// 性能测试

const arr1 = []
for(let i = 0; i < 20* 10000; i++){
    if(i % 10 === 0){
        arr1.push(0);
    }else{
        // @ts-ignore
        arr1.push[i];
    }
}

console.time('moveZero1');
moveZero1(arr1);

console.timeEnd('moveZero1'); // 42ms


const arr2 = []
for(let i = 0; i < 20* 10000; i++){
    if(i % 10 === 0){
        arr2.push(0);
    }else{
        // @ts-ignore
        arr2.push[i];
    }
}
console.time('moveZero2');
moveZero2(arr2);
console.timeEnd('moveZero2'); // 1ms

