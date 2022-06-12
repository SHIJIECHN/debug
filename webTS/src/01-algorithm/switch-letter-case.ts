/**
 * @description 切换字母大小写
 */

/**
 * 切换字母大小写（正则表达式）
 * @param s string
 */
export function switchLetterCase1(s: string): string{
    let res = '';

    const length = s.length;
    if(length === 0) return res;

    const reg1 = /[a-z]/; // 匹配小写
    const reg2 = /[A-Z]/; // 匹配大写

    for(let i = 0; i < length; i++){
        const c = s[i];
        // 匹配小写
        if(reg1.test(c)){
            res += c.toUpperCase();
        }else if(reg2.test(c)){ // 匹配大写
            res += c.toLowerCase();
        }else{ // 其他字符
            res += c;
        }
    }
    return res;
}

export function switchLetterCase2(s: string): string{
    let res = "";

    const length = s.length;
    if(length === 0) return res;

    for(let i = 0; i < length; i++){
        const c = s[i];
        const code =  c.charCodeAt(0);// 获取ASCII码

        // 大写字母
        if(code>= 65 && code <= 90){
            res += c.toLowerCase();
        }else if(code >= 96 && code <= 122){ // 小写字母
            res += c.toUpperCase();
        }else{
            res += c;
        }
    }
    return res;
}

// 性能测试
// const s = '100aBcD$xYz&';
// console.log(switchLetterCase2(s));

// 性能测试
const str = '1002*S*&HGsskdh9*skfdksksjd(*HGFBHGVG**^&^g';
console.time('switchLetterCase1');
for(let i = 0; i < 10 * 10000; i++){
    switchLetterCase1(str);
}
console.timeEnd('switchLetterCase1'); // 407ms

console.time('switchLetterCase2');
for(let i = 0; i < 10 * 10000; i++){
    switchLetterCase2(str);
}
console.timeEnd('switchLetterCase2'); // 159ms