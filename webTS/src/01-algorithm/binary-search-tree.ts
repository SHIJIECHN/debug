/**
 * @description 二叉搜索树
 */

interface ITreeNode{
    value: number,
    left: ITreeNode | null,
    right: ITreeNode | null
}

/**
 * 二叉树前序遍历
 * @param node tree node
 */
function preOrderTraverse(node: ITreeNode | null){
    if(node == null) return
    console.log(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
    
}

/**
 * 二叉树中序遍历
 * @param node tree node
 */
// function inOrderTraverse(node: ITreeNode | null){
//     if(node == null) return 
//     inOrderTraverse(node.left);
//     console.log(node.value);    
//     inOrderTraverse(node.right);
// }

/**
 * 二叉树后序遍历
 * @param node tree node
 */
 function postOrderTraverse(node: ITreeNode | null){
    if(node == null) return 
    postOrderTraverse(node.left);   
    postOrderTraverse(node.right);
    console.log(node.value); 
}


const tree: ITreeNode = {
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

// preOrderTraverse(tree); // 5 3 2 4 7 6 8
// inOrderTraverse(tree); // 2 3 4 5 6 7 8
// postOrderTraverse(tree);// 2 4 3 6 8 7 5