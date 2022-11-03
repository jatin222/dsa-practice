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
let res = deleteNode(ll.head, 3)

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
 * @param {position} x position of a node to be deleted
 * @returns Head node of linked list
 */
function deleteNode(head, x) {
    let temp = head
    
    let i = 1
    let pre = null
    while(temp != null)
    {
        if(i == x)
        {
            if(pre == null)
            {
                temp = temp.next
                return temp
            }
            pre.next = temp.next
            return head
        }
        
        pre = temp
        temp = temp.next
        i++
    }
    
    return head
}