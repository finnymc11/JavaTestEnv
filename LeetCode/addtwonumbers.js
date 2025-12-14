function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function list(...nums) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let n of nums) {
        current.next = new ListNode(n);
        current = current.next;
    }

    return dummy.next;
}

const l1 = list(2, 4, 3); // represents 342
const l2 = list(5, 6, 4); // represents 465

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

function printList(node) {
    const out = [];
    while (node) {
        out.push(node.val);
        node = node.next;
    }
    return out.join(" -> ");
}

console.log(printList(addTwoNumbers(l1, l2)));