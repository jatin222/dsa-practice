const { LinkedList } = require("./common/LinkedList")
const { Node } = require("./common/Node")

//Build linked list
let ll = new LinkedList
ll.insertAtHead(5)
ll.insertAtTail(10)
ll.insertAtTail(20)
ll.insertAtTail(30)
ll.insertAtTail(40)

ll.printAll()

//call a function
let res = insertInSortedLinkedList(ll.head, 500)

//print output
let html = ""
while(res != null)
{
    html += res.data + " "
    res = res.next
}
console.log(html)

/**
 * Insert data in a sorted linked list
 * @param {Node} head Head node of linked list
 * @param {integer} data data to be inserted in linked list 
 * @returns Head node of linked list
 */
function insertInSortedLinkedList(head, data) {
    let temp = head
    if(data <= temp.data)
    {
        let newNode = new Node(data)
        newNode.next = temp 
        temp = newNode
        return temp
    }

    while(temp != null)
    {
        if(temp.data <= data && (temp.next == null || data <= temp.next.data)) {
            let newNode = new Node(data)
            newNode.next = temp.next
            temp.next = newNode
            return head
        }

        temp = temp.next
    }
}