var binaryTree = function (val) {
	this.treeTop = new Node(val);

	this.addNode = function (val) {
		return addNodeHelper(val, this.treeTop);
	}
	//pre order
	this.preOrderPrint = function () {
		preOrderPrintHelper(this.treeTop);
	}
	var preOrderPrintHelper = function (node) {
		if (node === null){
			return;
		} else{
			console.log(node.val);
			preOrderPrintHelper(node.left);
			preOrderPrintHelper(node.right);
		}
	}
	//end pre order

	//in order
	this.inOrderPrint = function (){
		inOrderPrintHelper(this.treeTop);
	}

	var inOrderPrintHelper = function (node){
		if (node === null){
			return;
		} else{
			inOrderPrintHelper(node.left);
			console.log(node.val);
			inOrderPrintHelper(node.right);
		}
	}
	//end in order

	this.postOrderPrint = function (){
		postOrderPrintHelper(this.treeTop);
	}


	var postOrderPrintHelper = function (node){
		if (node === null){
			return;
		} else{
			postOrderPrintHelper(node.left);
			postOrderPrintHelper(node.right);
			console.log(node.val);
		}
	}

	var addNodeHelper = function (val, currentNode) {
		if (val < currentNode.val){
			if (currentNode.left === null){
				currentNode.left = new Node(val);
				return true;
			}else {
				return addNodeHelper(val, currentNode.left);
			}
		}else {
			if (currentNode.right === null){
				currentNode.right = new Node(val);
				return true;
			}else {
				return addNodeHelper(val ,currentNode.right);
			}
		}
	}
	//node constructor
	function Node (val) { 
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

var tree = new binaryTree(4);
tree.addNode(5);
tree.addNode(2);
tree.addNode(6);
tree.addNode(1);
tree.addNode(3);
console.log(tree);

tree.postOrderPrint();





