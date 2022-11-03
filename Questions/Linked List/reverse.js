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
let res = reverseList(ll.head)

//print output
let html = ""
while(res != null)
{
    html += res.data + " "
    res = res.next
}
console.log(html)

/**
 * Delete a node from tail in a linked list
 * @param {Node} head Head node of linked list
 * @returns Head node of linked list
 */
function reverseList(head) {
    let pre = null, current = head, currentNext = head.next
        
    while(current != null) {
        current.next = pre
        pre = current
        
        current = currentNext
        
        if(currentNext != null)
            currentNext = currentNext.next
    }
    
    return pre
}