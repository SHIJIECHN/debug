/**
 * 调试LeetCode中链表类型题目
 * 将输入的数组转换为链表
 */

/**
 * 
 * @param {*} arr 需要转换的数组
 * @param {*} type 转换的类型， 0为单链表，1为循环链表
 * @returns 
 */
export function array2list(arr, type = 0) {
    if (arr.length === 0) {
        return null;
    }
    // 第一个节点
    let head = {
        val: arr[0],
        next: null
    };
    let p = head, // 临时变量，在循环中存储上一个节点
        node = {}; // 存储当前节点
    for (let i = 1; i < arr.length; i++) {
        // 构建当前节点
        node = {
            val: arr[i],
            next: null
        }
        p.next = node; // 将当前节点与之前节点连接

        /**
         * p 是临时变量，之前和head共同指向同一个内存地址，
         * 这里p被重新赋值了，和node共同指向同一个内存地址
         * 设置当前节点为之前节点
         */
        p = node
    }

    if(type){
        p.next = head
    }

    console.log('list: ' + JSON.stringify(head, null, arr.length))
    return head;
}

/**
 * 链表转换为数组
 */
export function list2array(head) {
    if (!head) {
        console.log('array: []');
        return [];
    }
    let result = [],
        p = head;
    while (p) {
        result.push(p.val);
        p = p.next;
    }
    console.log('array: ' + result);
    return result;
}