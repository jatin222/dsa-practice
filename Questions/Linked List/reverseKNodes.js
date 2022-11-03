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
let res = reverseKNodes(ll.head, 3)

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
 * @param {K} integer reverse nodes
 * @returns Head node of linked list
 */
function reverseKNodes(head, K) {
    let pre = null, current = head, currentNext = head.next
        
    while(current != null && K > 0) {
        current.next = pre
        pre = current
        
        current = currentNext
        
        if(currentNext != null)
            currentNext = currentNext.next

        K--
    }

    head.next = current
    return pre
}