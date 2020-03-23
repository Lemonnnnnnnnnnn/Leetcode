const LList = require('./什么是链表')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let currentNode = l1
    let currentNode2 = l2
    if (currentNode && currentNode2) {
        const list = [l1.val, l2.val]
        while (currentNode.next !== null) {
            currentNode = currentNode.next
            list.push(currentNode.val)
        }
        while (currentNode2.next !== null) {
            currentNode2 = currentNode2.next
            list.push(currentNode2.val)
        }

        list.sort((a, b) => a - b)
        const res = ArrToLink(list)

        return res
    } else if (currentNode && !currentNode2) {
        return currentNode
    } else if (!currentNode && currentNode2) {
        return currentNode2
    } else if (!currentNode && !currentNode2) {
        return currentNode
    }

};

function Node(val) {
    this.val = val;   //当前节点的元素
    this.next = null;         //下一个节点链接
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(4)

const Node1 = new Node(1)
const Node2 = new Node(3)
const Node3 = new Node(4)

node1.next = node2
node2.next = node3

Node1.next = Node2
Node2.next = Node3

// console.log(mergeTwoLists(node1, Node1))

const asd = [-1, -5, 3, 1]
asd.sort((a, b) => a - b)
console.log(asd)

// sort 后面的返回值 小于0ab位置不变，大于0ab交换位置



function ArrToLink(arr) {
    let currentNode
    let quote

    for (let i of arr) {
        if (!currentNode) {
            currentNode = new Node(i)
            quote = currentNode
        } else {
            if (!quote.next) {
                quote.next = new Node(i)
                quote = quote.next
            }
        }
    }
    return currentNode
}



