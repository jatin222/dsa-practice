const {Node} = require('./Node')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insertAtHead(data) {
        let newNode = new Node(data)
        newNode.next = this.head

        this.head = newNode
        if(this.head.next == null)
        {
            this.tail = this.head
        }
        this.length++
        return true
    }

    insertAtTail(data) {
        if(this.head == null)
        {
            this.insertAtHead(data)
            this.tail = this.head
            return true
        }

        if(this.tail == null)
        {
            let head = this.head
            while(head.next != null)
            {
                head = head.next
            }
            this.tail = head
        }

        let newNode = new Node(data)
        this.tail.next = newNode
        this.tail = newNode
        return true
    }

    printAll() {
        let html = ""
        let head = this.head
        while(head != null)
        {
            html += head.data + " "
            head = head.next 
        }
        console.log(html);
        return true
    }


}

module.exports = {
    LinkedList
}

//console.log("p", typeof LinkedList)