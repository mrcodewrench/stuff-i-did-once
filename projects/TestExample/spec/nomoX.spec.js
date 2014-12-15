describe("makeNoSymbol", function() {
	it("returns a function", function() {
		expect(makeNoSymbol("v")).toEqual(Function.prototype);
	});
	it("get rid of x's in a row", function() {
		expect(makeNoSymbol("x")("love xxx porn")).toBe("love  porn");
	});
	it("get rid of last x", function() {
		expect(makeNoSymbol("x")("love sex")).toBe("love se");
	});
	it("returns empty for all x", function() {
		var noX = makeNoSymbol("x");
		expect(noX("xxxx")).toBe("");
	});
	it("works on big X", function() {
		var noX = makeNoSymbol("x");
		expect(noX("bam X man")).toBe("bam  man");
	});
});