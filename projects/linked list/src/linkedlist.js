
var List = function (val) {
	//add item counter
	this.listLength = 1;
	var firstNode = new Node(val);

	this.addNode = function (val) {
		var nodeToAdd = new Node(val);
		var currentNode = firstNode;

		while (currentNode.next != null){
			currentNode = currentNode.next;
		}
		currentNode.next = nodeToAdd;
	}
	//print list function
	this.printList = function (){
		var currentNode = firstNode;
		var valueAccum = "";
		while (currentNode != null) {
			valueAccum += (currentNode.val);
			currentNode = currentNode.next;
		}
		return valueAccum;
	}

	this.insertNode = function (place, val) {
		var nodeToInsert = new Node(val);
		currentNode = firstNode;
		if (place === 0) {
			nodeToInsert.next = firstNode; 
			firstNode = nodeToInsert;
		} else {
			for (;place - 1 > 0 ; place--){
				currentNode = currentNode.next;
			}
			nodeToInsert.next = currentNode.next;
			currentNode.next = nodeToInsert;
		}
	}
		// node constructor
	function Node (val){
		this.val = val;
		this.next = null;
	}
}



// var myList = new List("a");
// myList.addNode("b");
// myList.addNode("c");
// myList.addNode("d");
// console.log(myList.printList());
// myList.insertNode(2,"I");
// console.log(myList.printList());

var myList = new List("a");
myList.addNode("b");
myList.addNode("c");
myList.addNode("d");
myList.insertNode(5,"I");
console.log(myList.printList());