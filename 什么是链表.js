function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}

function LList() {
    this.head = new Node('head');     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    // this.remove = remove;               //删除节点
    // this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


// const list = new LList()
// list.insert('body', 'head')
// list.insert('footer', 'body')
// list.display()

// export default LList
module.exports = LList