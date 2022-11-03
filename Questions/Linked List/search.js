//search element in Linked List



/**
 * head: Head pointer of LL
 * k: value to search in LL
 * return: Boolean if the k value exists in LL
 */
function searchInLL(head, k) {
    let currentPoint = head

    if(head == null)
    {
        return false
    }

    while(currentPoint.next != null)
    {
        if(currentPoint.data == k)
        {
            return true
        }

        currentPoint = currentPoint.next
    }

    return false
}