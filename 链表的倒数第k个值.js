function Node(element) {
    this.val = element
    this.next = null
}

var getKthFromEnd = function (head, k) {
    let currentNode = head
    let length = 1

    while (currentNode.next) {
        currentNode = currentNode.next
        length++
    }

    const targetNodeIndex = length + 1 - k
    let index = 0
    let currentNode2 = head
    let targetNode
    while (currentNode2) {
        index++
        if (targetNodeIndex === index) {
            targetNode = currentNode2
        }
        currentNode2 = currentNode2.next
    }


    return targetNode
};

const node = new Node(1)
node.next = new Node(2)
node.next.next = new Node(3)
node.next.next.next = new Node(4)
node.next.next.next.next = new Node(5)

console.log(getKthFromEnd(node, 2))



