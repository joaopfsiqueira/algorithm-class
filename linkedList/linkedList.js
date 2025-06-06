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
}

let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
console.log(myLinkedList);