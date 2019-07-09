/**
 * Description:
 * 
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order 
 * and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, 
 * except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * made by myself
 * 运用链表，一位一位的计算，有进位则进位
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let carry = 0;
    let result = head;
    while(l1 !== null && l2 !== null) {
        let cur = l1.val + l2.val + carry;
        carry = Math.floor(cur / 10);
        head.next = new ListNode(cur % 10);
        head = head.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1 !== null) {
        let cur = l1.val + carry;
        carry = Math.floor(cur / 10);
        head.next = new ListNode(cur % 10);
        head = head.next;
        l1 = l1.next;
    }
    
    while(l2 !== null) {
        let cur = l2.val + carry;
        carry = Math.floor(cur / 10);
        head.next = new ListNode(cur % 10);
        head = head.next;
        l2 = l2.next;
    }
    
    if(carry !==0) {
        head.next = new ListNode(carry);
        head = head.next;
    }
    
    return result.next;
};

/**
 * made by others
 * 简化代码，之前写的代码里面太多重复的代码了
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let res = head;
    let carry = 0;
    
    while(l1 !== null || l2 !== null) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;
        
        let cur = val1 + val2 + carry;
        carry = Math.floor(cur / 10);
        head.next = new ListNode(cur % 10);
        head = head.next;
        
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    
    if(carry) {
        head.next = new ListNode(carry);
    }
    
    return res.next;
};