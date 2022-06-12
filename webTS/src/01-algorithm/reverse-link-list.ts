/**
 * @description 反转单向链表
 */


/**
 * 链表结构
 */
export interface ILinkListNode{
    value: number
    next?: ILinkListNode
}

/**
 * 反转单向链表，并返回反转之后的head node
 * @param listNode list head node
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode{
    // 定义三个指针
    let prevNode: ILinkListNode | undefined = undefined;
    let curNode: ILinkListNode | undefined = undefined;
    let nextNode: ILinkListNode | undefined = listNode;

    // 以nextNode为主遍历链表
    while(nextNode){
        // 第一个元素，删掉next， 防止循环引用
        if(curNode && !prevNode){ // 开始的情况: curNode有值，prevNode没有值。就是第一个元素没有next指向，直接删除
            delete curNode.next
        }

        // 反转指针
        if(curNode && prevNode){ // 中间的情况
            curNode.next = prevNode;
        }

        // 整体向后移动指针
        prevNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next; // ? 属性获取不到就返回空，如果没有next属性，返回undefined
    }

    // 最后个的补充：当 nextNode 空时，此时 curNode 尚未设置 next
    curNode!.next = prevNode; // ! 判断curNode可能没有值，加！表示不用管我自己处理。因为在定义的时候有可能curNode为undefined

    return curNode!;
}


/**
 * 根据数组创建单向链表
 * @param arr number arr
 * @returns 返回单向链表
 * 返回的是什么呢？返回的是一个头，因为链表单向结构，所以只要找到头head就可以了。
 * 我们说的输入链表，其实就是输入head，返回链表也是返回head，就是节点
 *  arr = [100, 200, 300]
 * {value: 300}
 * {value: 200, next: {value: 300}}
 * {value: 100, next: {value: 200, next: {value: 300}}}
 */
export function createLinkList(arr: number[]): ILinkListNode {
    
    const length = arr.length;
    if(length === 0) throw new Error('arr is empty');


    // 当前节点。因为我们要按数组生成链表，我们从后往前依次生成
    let curNode: ILinkListNode = {
        value: arr[length -1] // 数组的最后一个节点
    }

    if(length === 1) return curNode; // 只有一个元素，直接返回当前节点

    // 循环遍历，从倒数第二个节点开始
    for(let i = length -2; i >=0; i--){
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode
}

// const arr = [100, 200, 300, 400, 500];
// const list = createLinkList(arr);
// console.info('list: ', list);

// const list1 = reverseLinkList(list);
// console.info(list1)