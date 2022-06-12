/**
 * @description 用链表实现队列
 */

interface IListNode {
    value : number,
    next: IListNode | null
}

export class MyQueue {
    private head: IListNode | null = null;
    private tail: IListNode | null = null;
    private len = 0;

    /**
     * 入队，在 tail 位置
     * @param n number
     */
    add(n: number){
        const newNode: IListNode = {
            value: n,
            next: null // 在tail位置入队，所以最后一个next是没有值的
        }
        // 假设head和tail都是空的，也就是增加的是第一个节点，这时head和tail都要指向新增的节点

        // 处理head。当head为空时
        if(this.head == null){
            this.head = newNode
        }

        // 处理tail
        const tailNode = this.tail; // 获取当前的 tail 节点
        if(tailNode){ // 如果tailNode不为空的，将这个节点的next指向新增的节点
            tailNode.next = newNode;
        }
        // 将 tail 指向新的节点
        this.tail = newNode;

        // 记录长度
        this.len++;

    }

    /**
     * 出队，在 head 位置
     */
    delete(): number | null{
        const headNode = this.head;
        if(headNode == null ) return null; // 没有节点了

        if(this.len <= 0) return null;

        // 取值
        const value = headNode.value;

        // 修改head指向
        this.head = headNode.next;

        // 记录长度
        this.len--;

        return value;
    }

    get length():number{
        // len要单独存储，不能遍历链表获取，否则时间复杂度太高
        return this.len;
    }
}
// 功能测试
// const q = new MyQueue();
// q.add(100);
// q.add(200);
// q.add(300);
// console.info('length1: ', q.length);
// console.log(q.delete());
// console.info('length2: ', q.length);
// console.log(q.delete());
// console.info('length3: ', q.length);
// console.log(q.delete());
// console.info('length4: ', q.length);
// console.log(q.delete());
// console.info('length5: ', q.length);

// 性能测试
const q1 = new MyQueue();
console.time('queue with list');
for(let i = 0; i < 10*10000; i++){
    q1.add(i);
}
for(let i = 0; i < 10*10000; i++){
    q1.delete();
}
console.timeEnd('queue with list'); // 12ms

const q2 = [];
console.time('queue with array');
for(let i = 0; i < 10*10000; i++){
    q2.push(i);
}
for(let i = 0; i < 10*10000; i++){
    q2.shift();
}
console.timeEnd('queue with array'); // 495ms