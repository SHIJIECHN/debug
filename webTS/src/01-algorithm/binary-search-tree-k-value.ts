/**
 * @description 二叉搜索树
 */

export interface ITreeNode{
    value: number,
    left: ITreeNode | null,
    right: ITreeNode | null
}

const arr: number[] = [];

/**
 * 二叉树中序遍历
 * @param node tree node
 */
 function inOrderTraverse(node: ITreeNode | null){
    if(node == null) return 
    inOrderTraverse(node.left);
    arr.push(node.value)   
    inOrderTraverse(node.right);
}

/**
 * 寻找BST里的第k小值
 * @param node tree node
 * @param k 第几个值
 */
export function getKthValue(node: ITreeNode, k: number): number | null{
    inOrderTraverse(node); // arr = [2,3,4,5,6,7,8];
    // 数组的下标是从0开始计数的，所以3对应的是5
    return arr[k - 1] || null;
    
}

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right:{
        value: 7,
        left:{
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

// inOrderTraverse(bst); // 2 3 4 5 6 7 8
console.log(getKthValue(bst, 3));