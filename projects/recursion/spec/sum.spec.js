describe("sumIter", function() {
	it("sigma of 0", function() {
		expect(sumIter(0)).toBe(0);
	});
	it("sigma of 5", function() {
		expect(sumIter(5)).toBe(15);
	});
	it("sigma of 10", function() {
		expect(sumIter(10)).toBe(55);
	});
	
});

describe("sumRecur", function() {
	it("sigma of 0", function() {
		expect(sumRecur(0)).toBe(0);
	});
	it("sigma of 5", function() {
		expect(sumRecur(5)).toBe(15);
	});
	it("sigma of 10", function() {
		expect(sumRecur(10)).toBe(55);
	});
	
});

describe("sumTail", function() {
	it("sigma of 0", function() {
		expect(sumTail(0)).toBe(0);
	});
	it("sigma of 5", function() {
		expect(sumTail(5)).toBe(15);
	});
	it("sigma of 10", function() {
		expect(sumTail(10)).toBe(55);
	});
	
});