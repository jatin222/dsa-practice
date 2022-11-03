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
let res = deleteFromTail(ll.head)

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
function deleteFromTail(head) {
    let temp = head
    if(temp == null)
    {
        return false
    }

    if(temp.next == null)
    {
        temp = null
        return null
    }

    while(temp.next.next != null)
    {
        temp = temp.next
    }
    
    temp.next = null

    return head    
}