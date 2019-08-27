/**
 * 合并两个有序链表
 * 
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4
 */

 /**
  * 链表
  */
 function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode();
    let result = res;
    let head1 = l1;
    let head2 = l2;
    /**
     * 当两个链表都不为空时，比较大小后添加在新的链表上
     * 注意链表指针的移动
     */
    while(head1 !== null && head2 !== null) {
        if(head1.val < head2.val) {
            res.next = head1;
            res = res.next;
            head1 = head1.next;
        }
        else {
            res.next = head2;
            res = res.next;
            head2 = head2.next;
        }
    }
    /**
     * 当有一个链表为空时，直接将另一个链表加在新的链表上即可
     * 此时不需要用 while
     */
    if(head1 !== null) {
        res.next = head1;
    }
    if(head2 !== null) {
        res.next = head2;
    }
    return result.next;
};