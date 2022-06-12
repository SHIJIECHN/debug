/**
 * @description 两个栈 - 一个队列
 */


export class MyQueue{
    // private是当前类可以调用，但是实例不能调用
    private stack1: number[] = [];
    private stack2: number[] = [];

    /**
     * 入队
     * @param n n
     */
    add(n: number){
        this.stack1.push(n);
    }

    /**
     * 出队
     */
    delete(): number | null {
        let res;

        const stack1 = this.stack1;
        const stack2 = this.stack2;
        // 1. 将stack1所有元素移动到stack2中
        while(stack1.length){
            const n = stack1.pop();
            if(n != null){
                stack2.push(n);
            }
        }
        // 2. stack2 pop
        res = stack2.pop();

        // 3. 将stack2所有元素“还给”stack1
        while(stack2.length){
            const n = stack2.pop();
            if(n != null){
                stack1.push(n);
            }
        }

        return res || null

    }

    // 使用get的方式定义length，是想通过属性的方式访问length，即q.length
    get length(): number{
        return this.stack1.length;
    }
}

// 功能测试
// const q = new MyQueue();
// q.add(100);
// q.add(200);
// q.add(300);
// console.info(q.length);
// console.info(q.delete());
// console.info(q.length);
