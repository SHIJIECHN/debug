import { array2list, list2array } from "./list.js";

class ListNode{
  constructor(val, next){
    this.val =  val;
    this.next = next;
  }
}

var removeElements = function(head, val) {
  let ret = new ListNode(0, head);
  let cur = ret;
  while(cur.next){
    if(cur.next.val === val){
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return ret.next;  
};


let head = [7,7,7,7];
let val = 7;

head = array2list(head);
list2array(removeElements(head, val));
