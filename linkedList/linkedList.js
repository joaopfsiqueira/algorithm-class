// {
// 	head: {
// 		value:11,
// 		next: {
// 			value: 3,
// 			next: {
// 				value 4,
// 				next: null
// 			}
// 		}
// 	}
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode; // The first node is the head of the linked list
    this.tail = this.head; // The tail is also the first node initially
    this.length = 1; // The length of the linked list starts at 1
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // If the list is empty, set head to new node
      this.tail = newNode; // Set tail to new node
    } else {
      this.tail.next = newNode; // Link the current tail to the new node
      this.tail = newNode; // Update the tail to the new node
    }
    this.length++; // Increment the length of the linked list
    return this; // Return the linked list for chaining
  }

  pop() {
    if (!this.head) return undefined; // If the list is empty, return undefined
    let current = this.head; // Start from the head
    let newTail = current; // Initialize newTail to head

    while (current.next) {
      newTail = current; // Move newTail to the next node
      current = current.next; // Move current to the next node
    }

    this.tail = newTail; // Update tail to the new tail
    this.tail.next = null; // Set the next of new tail to null
    this.length--; // Decrement the length of the linked list

    if (this.length === 0) {
      this.head = null; // If the list is now empty, set head to null
      this.tail = null; // Set tail to null as well
    }

    return current; // Return the popped node
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // If the list is empty, set head to new node
      this.tail = newNode; // Set tail to new node
    } else {
      newNode.next = this.head; // Link the new node to the current head
      this.head = newNode; // Update head to the new node
    }
    this.length++; // Increment the length of the linked list
    return this; // Return the linked list for chaining
  }

  shift() {
    if (!this.head) return undefined; // If the list is empty, return undefined
    const currentHead = this.head; // Store the current head
    this.head = this.head.next; // Update head to the next node
    this.length--; // Decrement the length of the linked list

    if (this.length === 0) {
      this.tail = null; // If the list is now empty, set tail to null
    }

    return currentHead; // Return the removed head node
  }

  get(index) {
    if (index < 0 || index >= this.length) return null; // Check for valid index
    let current = this.head; // Start from the head
    for (let i = 0; i < index; i++) {
      current = current.next; // Move to the next node
    }
    return current; // Return the node at the specified index
  }

  set(index, value) {
    const node = this.get(index); // Get the node at the specified index
    if (node) {
      node.value = value; // Update the value of the node
      return true; // Return true if successful
    }
    return false; // Return false if the index is invalid
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false; // Check for valid index
    if (index === 0) return !!this.unshift(value); // If inserting at head, use unshift
    if (index === this.length) return !!this.push(value); // If inserting at tail, use push

    const newNode = new Node(value); // Create a new node
    const prevNode = this.get(index - 1); // Get the previous node
    newNode.next = prevNode.next; // Link the new node to the next node
    prevNode.next = newNode; // Link the previous node to the new node
    this.length++; // Increment the length of the linked list
    return true; // Return true if successful
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined; // Check for valid index
    if (index === 0) return this.shift(); // If removing from head, use shift
    if (index === this.length - 1) return this.pop(); // If removing from tail, use pop

    const prevNode = this.get(index - 1); // Get the previous node
    const removedNode = prevNode.next; // Store the node to be removed
    prevNode.next = removedNode.next; // Link the previous node to the next node
    this.length--; // Decrement the length of the linked list
    return removedNode; // Return the removed node
  }

  reverse() {
    if (!this.head) return this; // If the list is empty, return it
    let current = this.head; // Start from the head
    this.tail = this.head; // Update tail to the current head
    let prev = null; // Initialize previous node as null

    while (current) {
      const nextNode = current.next; // Store the next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev to the current node
      current = nextNode; // Move to the next node
    }

    this.head = prev; // Update head to the last processed node
    return this; // Return the reversed linked list
  }

}

let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.pop();
console.log(myLinkedList);