describe("merge sort", function() {
	it("sort 1-10", function() {
		var testArray = [6,9,3,10,5,1,7,8,2,4];
		mergeSort(testArray);
		expect(testArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});
	it("sorting 1 item", function() {
		var smallArray = [6];
		mergeSort(smallArray);
		expect(smallArray).toEqual([6]);
	});
	it("sort a pre-sorted array", function() {
		var presortedArray = [1,2,3,4,5,6,7,8,9,10];
		mergeSort(presortedArray)
		expect(presortedArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});
	it("sort reverse order", function() {
		var reverseArray = [10,9,8,7,6,5,4,3,2,1];
		mergeSort(reverseArray)
		expect(reverseArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});
});