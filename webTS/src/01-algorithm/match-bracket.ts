/**
 * @description 括号匹配
 */

/**
 * 判断括号是否匹配
 * @param left 左括号
 * @param right 右括号
 * @returns 
 */
function isMatch(left: string, right: string): boolean{
    if(left === '(' &&  right === ')') return true;
    if(left === '{' &&  right === '}') return true;
    if(left === '[' &&  right === ']') return true;
    return false;    
}


/**
 * 判断是否括号匹配
 * @param str str
 */
export function matchBracket(str: string): boolean{
    const length = str.length;
    // 空字符串
    if(length === 0) return true;

    const stack = [];
    const leftSymbols = '{[('; // 左括号
    const rightSymbols = '}])'; // 有括号

    // 循环字符串
    for(let i = 0; i < length; i++){
        const s = str[i];

        // 判断是否是左括号
        if(leftSymbols.includes(s)){
            stack.push(s); // 左括号，压栈
        }else if(rightSymbols.includes(s)){ // 判断是否是右括号
            const top = stack[stack.length -1]; // 左括号
            // 左括号与右括号匹配
            if(isMatch(top, s)){
                stack.pop(); // 右括号，出栈
            }else{
                // 只要有一个不匹配，就说明括号不匹配
                return false;
            }
        }
    }
    return true;
}

// 功能测试
const str = '{a(b[c]d)e}f';
console.info(matchBracket(str));