describe("insert at", function() {
	beforeEach(function() {
		var myList = new List("a");
		myList.addNode("b");
		myList.addNode("c");
		myList.addNode("d");
	});
	afterEach(function() {
			});
	it("should insert at index 2", function() {
		myList.insertNode(2,"I");
		expect(myList.printList()).toBe("abIcd");
	});
	it("should insert at index 0", function() {
		myList.insertNode(0,"I");
		expect(myList.printList()).toBe("Iabcd");
	});
	it("should insert at index 1", function() {
		myList.insertNode(1,"I");
		expect(myList.printList()).toBe("aIbcd");
	});
	it("should insert at index 4", function() {
		myList.insertNode(4,"I");
		expect(myList.printList()).toBe("abcdI");
	});

});
