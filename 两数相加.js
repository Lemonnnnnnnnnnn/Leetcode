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
var addTwoNumbers = function (l1, l2) {

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let currentNode1 = l1
    let currentNode2 = l2
    let arr1 = [], arr2 = []

    while (currentNode1) {
        arr1.unshift(currentNode1.val)
        currentNode1 = currentNode1.next
    }

    while (currentNode2) {
        arr2.unshift(currentNode2.val)
        currentNode2 = currentNode2.next
    }

    const num1 = parseInt(arr1.toString().replace(/[,]/g, ''))
    const num2 = parseInt(arr2.toString().replace(/[,]/g, ''))
    const resArr = (num1 + num2).toString().split('').reverse()

    function arrToLink(arr) {
        let resLink, resLinkCurrentNode

        for (let i of arr) {
            if (!resLink) {
                resLink = new ListNode(i)
                // 浅克隆resLink的当前节点
                resLinkCurrentNode = resLink
            } else {
                // 如果当前节点的next为空，赋值Node节点，然后把当前节点设为下一节点，以进行下次循环赋值
                if (!resLinkCurrentNode.next) {
                    resLinkCurrentNode.next = new ListNode(i)
                    resLinkCurrentNode = resLinkCurrentNode.next
                }
            }
        }
        return resLink
    }

    return arrToLink(resArr)

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function arrToLink(arr) {
    let resLink, resLinkCurrentNode

    for (let i of arr) {
        if (!resLink) {
            resLink = new ListNode(i)
            // 浅克隆resLink的当前节点
            resLinkCurrentNode = resLink
        } else {
            // 如果当前节点的next为空，赋值Node节点，然后把当前节点设为下一节点，以进行下次循环赋值
            if (!resLinkCurrentNode.next) {
                resLinkCurrentNode.next = new ListNode(i)
                resLinkCurrentNode = resLinkCurrentNode.next
            }
        }
    }
    return resLink
}

const Link1 = arrToLink([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

// const Link1 = new ListNode(1)
// Link1.next = new ListNode(0)
// Link1.next.next = new ListNode(1)

const Link2 = new ListNode(5)
Link2.next = new ListNode(6)
Link2.next.next = new ListNode(4)


console.log(addTwoNumbers(Link1, Link2))